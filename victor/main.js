import range from 'lodash.range'

view Main {
  <Sky />
  <Tree />
  <Mountain class="high" color="#83A8B0" growth={5} />
  <Mountain class="low" color="#5B777B" growth={2.2} />

  $ = {
    color: 'darksalmon',
    padding: 20
  }
  
  $Tree = { position: 'absolute', zIndex: 1000 }
  
  $Mountain = { 
    position: 'absolute',
    bottom: 0,
    left: 0, 
    right: 0
  }
}

view Sky {
  $ = {
    background: '#ACD7EA',
    position: 'absolute',
    left: 0, right: 0, top: 0, bottom: 0,
  }
}

let drawBranches = (ctx, i, angle, x, y, width, blossomPoints = []) => {
  let random = (min, max) => (Math.random() - (max + min)) - min
  ctx.save()
  
  let length = 30 * random(2.7, 1.3)
  
  ctx.translate(x, y)
  ctx.rotate(angle)
  ctx.fillStyle = '#000'
  console.log('width is', width)
  ctx.fillRect(0, -width / 5, width, length)
  
  console.log('filling rect', 0, -width / 3, length, width)
  ctx.restore()
  
  let tipX = x + (length - width / 2) * Math.cos(angle)
  let tipY = y + (length - width / 2) * Math.sin(angle)
  
  if (i > 4) {
    blossomPoints.push([x,y,tipX, tipY])
  }
  
  if (i < 6) {
    drawBranches(ctx, i + 1, angle - random(-0.15, -0.05) * Math.PI/2, x + Math.random() * 26, y, width, blossomPoints)
    drawBranches(ctx, i + 1, angle + random(-0.15, -0.05) * Math.PI/2, x, y, width, blossomPoints)
  } else if (i < 12) {
    drawBranches(ctx, i + 1, angle + random(-0.25, -0.05) * Math.PI/2, x, y, width, blossomPoints)
  }
}

view Tree {
  
  let blossomPoints = []
  
  let render = canvas => {
    if (canvas === null) return
    const ctx = canvas.getContext('2d')
    const width = window.innerWidth
    drawBranches(ctx, 0, -Math.PI/ 6 , width/2, 311, 2)
  }
  
  <canvas width={window.innerWidth} 
          height={window.innerHeight} 
          ref={render} />
}

view Mountain {
  
  let canvasHeight = 800
  
  let render = canvas => {
    if (canvas === null) return
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.strokeStyle = view.props.color
    let height = 100
    let width = 8
    for (var i = 0; i < window.innerWidth; i++) {
      let skip = Math.floor(Math.random() * width)
      i += skip
      height += (Math.random() * view.props.growth) - .4
      ctx.lineWidth = width + 1
      ctx.stroke()
      ctx.moveTo(i, canvasHeight)
      ctx.lineTo(i, canvasHeight-height)
    }
    ctx.closePath()
  }
  
  <canvas width={window.innerWidth} 
          height={canvasHeight} 
          ref={render} />
}
