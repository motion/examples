let timeLabel = elapsed => {
  // 7 => 07
  let buffer = n => (''+n).length < 2 ? `0${n}` : n
  let ds = elapsed / 1000
  let dm = ds / 60
  let show = t => buffer((''+t).substr(0, 2).replace(/\./g,''))
  return `${show(dm)}:${show(ds % 60)}:${show(elapsed % 1000)}`
}

let col = { display: 'flex', flexFlow: 'column', }
let row = { display: 'flex', flexFlow: 'row', }
let center = { alignItems: 'center', justifyContent: 'center' }

view Main {
  let active = false
  let elapsed = 0
  let intervalID = null
  let startTime = null
  // add up all the time before was paused
  let pausedTime = 0
  let saves = []

  let reset = () => {
    elapsed = 0
    pausedTime = 0
    active = false
    clear()
  }

  let clear = () => {
    active = false
    if (intervalID) clearInterval(intervalID)
  }

  let stop = () => {
    elapsed = 0
    pausedTime = 0
    clear()
  }

  let save = () => {
    saves.push(elapsed)
    pausedTime = 0
    startTime = +Date.now()
  }

  let pause = () => {
    pausedTime = elapsed
    clear()
  }

  let start = () => {
    startTime = +Date.now() - pausedTime
    pausedTime = 0
    active = true
    intervalID = setInterval(() => {
      elapsed = +Date.now() - startTime
    }, 30)
  }

  on('unmount', clear)

  <panel>
    <Display onStart={start}
             onPause={pause}
             onSave={save}
             active={active}
             elapsed={elapsed}
             onStop={stop} />

    <Saved if={saves.length > 0} items={saves} />
  </panel>

  $ = Object.assign.apply(null,[col, center, {
    width: '100%', height: '100%',
    background: '#3a26d7',
    fontFamily: '"Helvetica", Arial, sans-serif',
    margin: 0,
  }])

  $panel = [col, center, {
    background: 'white',
    width: 400,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    padding: 48,
  }]
}

//class={{last: _index == view.props.items.length - 1 }}>
view Saved {
  <save repeat={view.props.items}>
    <strong>✔︎</strong><Time elapsed={_} />
  </save>

  $ = {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    margin: [32, 0, 0],
    maxHeight: 250,
    padding: 0,
  }

  $save = {
    padding: [16, 0],
    display: 'block',
    fontWeight: 300,
    color: '#737373',
    userSelect: 'none',
    borderBottom: '1px solid #dedede',
  }

  $strong = {
    display: 'inline-block',
    marginRight: 8,
    color: '#1aed6f',
  }
}

view Time {
  <time>{timeLabel(view.props.elapsed)}</time>

  $time = { ':hover': { color: 'orange' }}
}
