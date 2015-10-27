let timeLabel = elapsed => {
  // 7 => 07
  let buffer = n => (''+n).length < 2 ? `0${n}` : n
  let ds = elapsed / 1000
  let dm = ds / 60
  let show = t => buffer((''+t).substr(0, 2).replace(/\./g,''))
  return `${show(dm)}:${show(ds % 60)}:${show(elapsed % 1000)}`
}
  
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
    intervalID = setInterval(() => elapsed = +Date.now() - startTime, 30)
  }
  
  on('unmount', clear)
  
  <panel>
    <Display onStart={start} 
             onPause={pause} 
             onSave={save} 
             active={active}
             elapsed={elapsed}
             onStop={stop} />
    <Saved items={saves} />
  </panel>
}

view Saved {
  <saved>
    <save repeat={^items}>
      <strong>✔︎</strong><Time elapsed={_} />
    </save>
  </saved>
}

view Time {
  <time>{timeLabel(^elapsed)}</time>
}