import { api, route, link, font } from './helpers'

view Main {
  <Head />
  <Home route={route.home} />
  <Project route={route.project(':id')} />

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
    fontWeight: 300
  }

  $h1 = {
    display: 'flex',
    flexGrow: 1,
    fontSize: 16,
    margin: 0
  }

  $recent = {
    flexFlow: 'row',
    flexGrow: 1
  }

  $email = {
    font: font.book,
    color: '#ccc'
  }
}

view Link {
  <link-a onClick={link(view.props.to)} yield />

  $ = {
    textDecoration: view.props.plain ? 'none' : 'underline',
    cursor: 'pointer'
  }
}