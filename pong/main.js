let background = `rgb(60, 100, 60)`

view Main {
  let playing = false
  let margin = 184
  let score = {
    ai: 5, player: 3
  }
  
  let court = {
    right: window.innerWidth - margin * 2,
    bottom: window.innerHeight - margin / 2,
    left: margin,
    top: margin / 2,
  }
  
  let middle = court.start + (court.end - court.start)/2
  
  let speed = 1
  let ball = {
    x: middle, 
    y: 100,
    dir: 1
  }
  
  let goal = who => {
    score[who] = score[who]+1
    ball.x = middle
    speed = 1
    ball.dir = -1
  }
  
  let frame = () => {
    ball.x += ball.dir * speed
    speed += .01
    if (ball.x > court.right) goal('player')
    if (ball.x < court.left) goal('player')
  }
  
  on.frame(frame)
  
  <scores>
    <score>{score.player}</score>
    <score>{score.ai}</score>
  </scores>
  <Ball />

  $ = [{
    position: 'absolute',
    background,
    padding: 20
  }, court, { right: margin }]
  
  $Ball = { position: 'absolute', left: ball.x, top: ball.y }
  $score = {
    color: `rgb(160, 200, 160)`,
    fontFamily: 'monospace',
    fontSize: 70,
    marginLeft: 251,
  }
  
  $scores = {
    flexFlow: 'row',
    marginLeft: 16,
    marginTop: 20,
  }
}