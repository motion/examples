let randTo = x => Math.floor(Math.random() * x)

view Main {
  let streak = 0
  let guess = ''
  let first, second, answer

  let next = () => {
    guess = ''
    first = randTo(15)
    second = randTo(15)
    answer = first * second
  }

  let check = () => {
    let correct = +guess === answer
    if (correct) {
      streak++
    } else {
      streak = 0
    }

    next()
  }
  next()

  <bg>
    <center>
      <top>
        Multiply!
        <streak if={streak > 0}>Streak: {streak}</streak>
      </top>
      <question>{first} times {second} is</question>
      <input
        id = "guess"
        placeholder="Enter your answer"
        sync={guess}
        onEnter={check}
      />
    </center>
  </bg>

  $bg = {
    background: 'linear-gradient(green, blue)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
  $top = {flexFlow: 'row', margin: 'auto'}
  $h1 = { color: 'white' }
  
  $question = { 
    flexFlow: 'row',
    margin: 'auto',
    paddingTop: 30,
  }

  $center = {
    margin: 'auto',
    textAlign: 'center',
    color: '#222',
    fontSize: 40,
  }

  $answer = {
    flexFlow: 'row',
    justifyContent: 'center',
    fontWeight: 'bold',
    background: 'rgba(0,0,0,0.2)',
  }

  $result = {
    display: 'inline-block',
    padding: '0 10px'
  }
  $streak = {flexFlow: 'row'}

  $right = [$result, { color: 'green' }]
  $wrong = [$result, { color: 'darkred' }]

  $pane = {
    background: 'rgba(0,0,0,0.2)',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  }

  $input = {
    alignSelf: 'auto',
    background: 'white',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    borderRadius: 10,
    border: 'none',
    padding: 10,
  }
}