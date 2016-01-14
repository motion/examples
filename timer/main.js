let timeLabel = elapsed => {
  // 7 => 07
  let buffer = n => (''+n).length < 2 ? `0${n}` : n
  let ds = elapsed / 1000
  let dm = ds / 60
  let show = t => buffer((''+t).substr(0, 2).replace(/\./g,''))
  return `${show(dm)}:${show(ds % 60)}:${show(elapsed % 1000)}`
}

let col = { flexFlow: 'column', }
let row = { flexFlow: 'row', }
let center = { alignItems: 'center', justifyContent: 'center' }

view Main {
  let active = false
  let elapsed = 0
  let intervalID = null
  let startTime = null
  // add up all the time before was paused
  let pausedTime = 0
  let saves = []

  let clear = () => {
    active = false
    if (intervalID) clearInterval(intervalID)
  }

  let onReset = () => {
    elapsed = 0
    pausedTime = 0
    active = false
    clear()
  }

  let onStop = () => {
    elapsed = 0
    pausedTime = 0
    clear()
  }

  let onSave = () => {
    saves.push(elapsed)
    pausedTime = 0
    startTime = +Date.now()
  }

  let onPause = () => {
    pausedTime = elapsed
    clear()
  }

  let onStart = () => {
    startTime = +Date.now() - pausedTime
    pausedTime = 0
    active = true
    intervalID = setInterval(() => {
      elapsed = +Date.now() - startTime
    }, 30)
  }

  <wrapper>
    <panel>
      <Display {...{ onStart, onPause, onSave, active, elapsed, onStop }} />
      <Saved if={saves.length > 0} items={saves} />
    </panel>
  </wrapper>

  $ = {
    position: 'absolute', left:0, top: 0, right: 0, bottom: 0,
    background: '#3a26d7',
    fontFamily: '"Helvetica", Arial, sans-serif',
  }

  $wrapper = [center, { height: '100%' }]
  $panel = [center, {
    margin: ['auto'],
    background: 'white',
    width: 400,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    padding: 48,
  }]
}

view Saved {
  prop items = []

  <save repeat={items}
        class={{last: _index == items.length - 1 }}>
    <strong>✔︎</strong>
    <Time elapsed={_} />
  </save>

  $ = {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    margin: [28, 0, 0],
    overflow: 'scroll',
    maxHeight: 300,
    padding: 1,
  }

  $save = {
    padding: [18, 0],
    fontWeight: 300,
    flexFlow: 'row',
    fontSize: 25,
    color: '#737373',
    userSelect: 'none',
    borderBottom: '1px solid #dedede',
  }

  $last = {
    borderBottom: 'none',
  }

  $strong = {
    display: 'inline-block',
    marginRight: 8,
    color: '#1aed6f',
  }
}

view Time {
  prop elapsed = null

  <time yield>{timeLabel(elapsed)}</time>

  $ = {
    hover: { color: '#ffa909' }
  }
}
