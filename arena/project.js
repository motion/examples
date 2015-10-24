view Project {
  let id, project, index
  let fetched = false
  let contents = []

  load()

  async function load() {
    id = ^params.id
    index = projectIds.indexOf(id)
    project = projects[index]

    let data = await fetchJSON(api.channel(id))
    contents = data.contents
    fetched = true
  }

  function plink(index) {
    return async () => {
      await go(`/project/${projects[index].id}`)
      load()
    }
  }

  <loading if={!fetched}>
    Loading...
  </loading>
  <Title
    left={plink(index-1)}
    right={plink(index+1)}>
    {project.name}
  </Title>
  <contents if={fetched} repeat={contents}>
    <img if={_.image} src={_.image.display.url} />
  </contents>

  $img = {
    margin: [0, 'auto', 20]
  }
}

view Project.Title {
  <main>
    <Arrow left onClick={^left} />
    <h1>{^children}</h1>
    <Arrow right onClick={^right} />
  </main>
  <close><Link to="/" plain>X</Link></close>

  $ = {
    margin: [50, 0],
    padding: [0, '7%', 0, '10%'],
    flexFlow: 'row',
    alignItems: 'center',
    width: '100%',

    h1: {
      fontSize: 22,
      margin: 0
    },

    main: {
      flexFlow: 'row',
      flexGrow: 1,
      justifyContent: 'space-between',
    },

    close: {
      padding: [0, 0, 0, 30],
      opacity: 0.5
    }
  }
}

view Arrow {
  <arrow if={^right} yield>&gt;</arrow>
  <arrow if={^left} yield>&lt;</arrow>

  $ = {
    cursor: 'pointer',
    padding: 10
  }
}