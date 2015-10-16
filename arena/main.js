// api
export const api = {}

api.base = 'http://api.are.na/v2'
api.channels = `${api.base}/channels`

api.user = id => `${api.base}/users/${id}`
api.user.channels = id => `${api.base}/users/${id}/channels`
api.channel = id => `${api.base}/channels/${id}`
api.block = id => `${api.base}/blocks/${id}`

view Main {
  let project

  <Project if={project} id={project} />
  <Home if={!project} onSelectProject={p => project = p} />
}

view Home {
  let fetched = false
  let user = {}
  let projects = [
    { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' },
    { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' },
    { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' },
    { name: 'Anat Ebgi', image: 'https://d2w9rnfcy7mm78.cloudfront.net/455645/large_38db3a15b50742036f1a2f0e1dbc46dd.jpg' },
  ]

  load()

  async function load() {
    user = await fetchJSON(api.user('414'))
    // projects = await fetchJSON(api.user.channels('414'))
    fetched = true
  }

  <loading if={!fetched}>
    Loading...
  </loading>
  <home if={fetched}>
    <h1>{user.full_name}</h1>
    <img src={user.avatar} />
    <h2>seecoy@me.com</h2>

    <projects repeat={projects}>
      <h4>{_.name}</h4>
      <img src={_.image} />
    </projects>
  </home>
}

view Project {
  let fetched = false
  let contents = []

  load()

  async function load() {
    let data = await fetchJSON(api.channel(^id))
    contents = data.contents
    fetched = true
  }

  <loading if={!fetched}>
    Loading...
  </loading>
  <contents if={fetched} repeat={contents}>
    <h1>{_.title}</h1>
    <img if={_.image} src={_.image.display.url} />
  </contents>
}