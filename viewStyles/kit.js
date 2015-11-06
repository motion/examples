// general brand color
const brandColor = '#eee' 
// text color
const color = '#333'


/* 
  yield sends the props down, and children sends a
  
*/

view Text {
  <text yield>{view.props.children}</text>
  
  $ = { color }
}

/* 
  rendering the lowercase name of the view with props and children passed
  is the default, so you can just use a style and you're done.
*/

view H1 {
  $ = {
    color, fontSize: 25
  }
}

view BigButton {
  $ = { 
    fontSize: 30, 
    border: '1px solid ' + brandColor, 
    color,
    padding: 20,
  }
}