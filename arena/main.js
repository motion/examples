// api
export const api = {}
api.base = 'http://api.are.na/v2'
api.channels = `${api.base}/channels`
api.user = id => `${api.base}/users/${id}`
api.channel = id => `${api.base}/channels/${id}`
api.block = id => `${api.base}/blocks/${id}`

export const font = {}
font.display = '15pt "GT Sectra", serif'
font.book = '13pt "GT Sectra Book", serif'
font.pressura = '15pt "GT Pressura", sans-serif'

export const go = Flint.router.go
export const link = Flint.router.link

export const route = {}
route.home = '/'
route.project = slug => `/project/${slug}`

export const projects = [
  { name: 'BARNRAZER', id: 'barnrazer' },
  { name: 'Hollywood High Modernism', id: 'hollywood-high-modernism' },
  { name: 'Monsters', id: 'monsters' },
  { name: 'marillouigi', id: 'marillouigi' },
  { name: 'In Situ', id: 'in-situ' },
  { name: 'Stadium NYC', id: 'stadium-nyc-in-post-summer-2012' },
  { name: 'Anat Ebgi' },
  { name: 'Anat Ebgi' },
  { name: 'Anat Ebgi' },
]

export const projectIds = projects.map(p => p.id)

export const loadProject = async index => {
  const url = api.channel(projects[index].id)
  projects[index].data = await fetchJSON(url)
}

view Main {
  let projectIndex = 0

  <Head />
  <Home route={route.home} onSelectProject={i => projectIndex = i} />
  <Project route={route.project(':id')} index={projectIndex} />

  $ = {
    font: font.book
  }
}

view Head {
  <h1><Link to="/" plain>Chris Coy</Link></h1>
  <recent>
    recent: <Link to="/projects/anat">Anat Ebgi at NADA New York</Link>
  </recent>
  <email>
    email@seecoy.com
  </email>

  $ = {
    font: font.display,
    color: '#333',
    flexFlow: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    fontWeight: 300,

    h1: {
      display: 'flex',
      flexGrow: 1,
      fontSize: 16,
      margin: 0
    },

    recent: {
      flexFlow: 'row',
      flexGrow: 1
    },

    email: {
      font: font.book,
      color: '#ccc'
    }
  }
}

view Link {
  function go() { Flint.router.go(^to) }

  <a-link onClick={go} yield />

  $ = {
    textDecoration: ^plain ? 'none' : 'underline',
    cursor: 'pointer'
  }
}