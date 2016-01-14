let noop = (() => {})

view Display {
  prop elapsed
  prop active
  prop onStop = noop
  prop onStart = noop
  prop onPause = noop
  prop onSave = noop

  <display>
    <title><Time elapsed={elapsed} /></title>
    <buttons>
      <Button class="minor"
              disabled={!active}
              onClick={active ? onStop : noop}>
        <text>◼︎</text>
      </Button>
      <Button class={{play:true, active }}
              onClick={active ? onPause : onStart}>
        <middleText>{active ? 'II' : '►'}</middleText>
      </Button>
      <Button class="minor"
              disabled={!active}
              onClick={active ? onSave : noop}>
        <text>✔︎</text>
      </Button>
    </buttons>
  </display>


  let activePlay = {
    animation: 'pulse 1200ms cubic-bezier(0,.97,.97,1) infinite',
  	color: 'rgb(26, 237, 111)',
  	border: '6px solid #ff560e !important',
  }

  $play = [{
    fontSize: 24,
    width: 80,
    height: 80,
  }, active ? activePlay : {}]

  $title = {
    userSelect: 'none',
    textAlign: 'center',
    fontSize: 54,
    marginBottom: 40,
    marginTop: 0,
    fontWeight: 300,
  }

  $buttons = {
    flexFlow: 'row',
  }

  let textS = {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    color: '#000',
    transform: 'translate(-50%, -50%)',
  }

  $text = textS

  $minor = {
    top: active ? 30 : 17,
    opacity: active ? 1 : .2,
  }

  let translatePlay = { transform: 'translate(-42%, -50%)' }
  $middleText = [textS, active?{}:translatePlay]
}
