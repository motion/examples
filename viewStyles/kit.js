const brandColor = '#eee'
const color = '#333'

// This is a pass-through view
// It will render a tag equal to it's name by default
// And it will also pass through all its properties

view H1 {
  $ = {
    color,
    fontSize: 25
  }
}


// Yield passes through all props
// This would be equivalent to above, but will render a p

view Text {
  <text-p yield />

  $ = { color }
}


// You can control your views more by just allowing
// the props you want like this
// Note: $={} will refer to the view container

view BigButton {
  <button onClick={view.props.onClick}>{view.props.children}</button>

  $button = {
    fontSize: 30,
    border: '1px solid ' + brandColor,
    color,
    padding: 20,
  }
}