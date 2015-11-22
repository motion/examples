// api
const api = {}
api.base = 'http://api.are.na/v2'
api.channels = `${api.base}/channels`
api.user = id => `${api.base}/users/${id}`
api.channel = id => `${api.base}/channels/${id}`
api.block = id => `${api.base}/blocks/${id}`

const font = {}
font.display = '15pt "GT Sectra", serif'
font.book = '13pt "GT Sectra Book", serif'
font.pressura = '15pt "GT Pressura", sans-serif'

const go = Flint.router.go
const link = Flint.router.link

const route = {}
route.home = '/'
route.project = slug => `/project/${slug}`

const projects = [
  { name: 'BARNRAZER', id: 'barnrazer' },
  { name: 'Hollywood High Modernism', id: 'hollywood-high-modernism' },
  { name: 'Monsters', id: 'monsters' },
  { name: 'marillouigi', id: 'marillouigi' },
  { name: 'In Situ', id: 'in-situ' },
  { name: 'Stadium NYC', id: 'stadium-nyc-in-post-summer-2012' },
  { name: 'Anat Ebgi' },
]

const projectIds = projects.map(p => p.id)

async function loadProject(index) {
  const url = api.channel(projects[index].id)
  projects[index].data = await fetch.json(url)
  return projects[index]
}

export default { api, font, go, link, route, projects, projectIds, loadProject }