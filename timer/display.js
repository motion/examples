view Display {
  let nothing = () => {}

  <display>
    <title><Time elapsed={view.props.elapsed} /></title>
    <Button class="minor" disabled={!view.props.active} onClick={view.props.onStop}>
      <text>◼︎</text>
    </Button>
    <Button
      class={{play:true, active: view.props.active}}
      onClick={view.props.active ? view.props.onPause : view.props.onStart}>
      <middleText>{view.props.active ? 'II' : '►'}</middleText>
    </Button>
    <Button class="minor" disabled={!view.props.active} onClick={view.props.onSave}>
      <text>✔︎</text>
    </Button>
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
  }, view.props.active ? activePlay : {}]

  $title = {
    userSelect: 'none',
    textAlign: 'center',
    fontSize: 54,
    marginBottom: 40,
    marginTop: 0,
    fontWeight: 300,
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

  $minor = { top: view.props.active ? -5 : 0 }

  let translatePlay = { transform: 'translate(-42%, -50%)' }
  $middleText = [textS, view.props.active?{}:translatePlay]
}

