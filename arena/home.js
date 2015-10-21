

view Home {
  let fetched = false
  let user = {}

  load()

  async function load() {
    user = await fetchJSON(api.user('414'))
    fetched = true
  }

  <loading if={!fetched}>
    Loading...
  </loading>
  <home if={fetched}>
    <projects>
      <item
        repeat={projects}
        onClick={^onSelectProject.partial(_index)}>
        <h4>
          <Link to={route.project(_.id)}>
            {_.name}
          </Link>
        </h4>
      </item>
    </projects>
  </home>
  <Foot />

  $ = {
    width: 960,
    margin: [0, 'auto'],
    padding: 80,

    projects: {
      position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 20
    }
  }
}

view Home.Foot {
  <section>
    <title>Sort:</title>
    <Link>A-Z</Link>
    <Link>Recent</Link>
    <Link>Dat</Link>
  </section>

  <section>
    <title>View:</title>
    <Link>List</Link>
    <Link>Thumbnail</Link>
  </section>

  <section class="end">
    <title>Built with:</title>
    <Link>Are.na</Link>
    +
    <Link>Flint</Link>
  </section>

  const item = {
    padding: [2, 5]
  }

  $ = {
    flexFlow: 'row',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    font: font.pressura,
    color: '#bbb',
    fontSize: '13pt',

    section: {
      flexFlow: 'row',
      alignItems: 'center',
      flexGrow: 1
    },

    '.end': {
      textAlign: 'right'
    },

    title: [item],
    Link: [item]
  }
}