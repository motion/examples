import dynamics from 'dynamics.js'

let headerPath = ({ x, y }) =>
  `M0,0 L320,0 320,160Q${x},${y} 0,160`

let contentPosition = ({ x, y }) => {
  let dy = y - 160
  let dampen = dy > 0 ? 2 : 4
  return { transform: `translate3d(0,${dy / dampen}px,0)` }
}

document.body.addEventListener('touchmove', function (e) {
  e.preventDefault()
})

view Main {
  let dragging = false
  let c = { x: 160, y: 160 } //quadratic bezier control point
  let start = { x: 0, y: 0} //drag start point

  let startDrag = e => {
    e = e.changedTouches ? e.changedTouches[0] : e
    dragging = true
    start.x = e.pageX
    start.y = e.pageY
  }

  let onDrag = e => {
    e = e.changedTouches ? e.changedTouches[0] : e
    if (dragging) {
      c.x = 160 + (e.pageX - start.x)
      // dampen vertical drag by a factor
      let dy = e.pageY - start.y
      let dampen = dy > 0 ? 1.5 : 4
      c.y = 160 + dy / dampen
    }
  }

  let stopDrag = () => {
    if (dragging) {
      dragging = false
      dynamics.animate(c, { x: 160, y: 160 }, {
        type: dynamics.spring,
        duration: 700,
        friction: 280,
        change: __.update,
      })
    }
  }

  let blue = "#3F51B5"

  <draggable onMouseDown={startDrag}
             onMouseMove={onDrag}
             onMouseLeave={stopDrag}
             onMouseUp={stopDrag}
             onTouchStart={startDrag}
             onTouchMove={onDrag}
             onTouchEnd={stopDrag}>
    <header>
      <h1>Draggable Header</h1>
      <p>with <a style={{color:'white'}} href="http://flintjs.com" target="_blank">Flint</a> + <a  style={{color:'white'}} href="http://dynamicsjs.com" target="_blank">dynamics.js</a></p>
    </header>
    <svg width={320} height={560}>
      <path d={headerPath(c)} fill={blue}></path>
    </svg>
    <content style={contentPosition(c)}>
      Note this is just an effect demo - there are of course many additional details if you want to use this in production, e.g. handling responsive sizes, reload threshold and content scrolling. Those are out of scope for this quick little demo.
      <p>Demo originally by <a href="http://vuejs.org/examples/elastic-header.html" target="_blank">VueJS</a></p>
    </content>
  </draggable>

  $h1 = {
    fontWeight: 300,
    fontSize: '1.8em',
    marginTop: 0,
  }

  $draggable = {
    background: 'white',
    boxShadow: '0 4px 16px rgba(0,0,0,.15)',
    width: 320,
    height: 560,
    overflow: 'hidden',
    margin: '30px auto',
    position: 'relative',
    fontFamily: "'Roboto', Helvetica, Arial, sans-serif",
    color: '#fff',
    fontSize: 14,
    fontWeight: 300,
    userSelect: 'none',
  }

  $svg = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  }

  $header = {
    position: 'relative',
    zIndex: 1,
    padding: 30,
    height: 160,
    background: blue,
    boxSizing: 'border-box',
  }

  $content = { color: '#333', lineHeight: '1.5em', padding: 20 }
}
