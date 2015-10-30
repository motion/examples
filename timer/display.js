view Display {
  let nothing = () => {}
  
  <display>
    <h1><Time elapsed={view.props.elapsed} /></h1>
    <button disabled={!view.props.active} onClick={view.props.onStop}>◼︎</button>
    <button 
      class={{play:true, active: view.props.active}} 
      onClick={view.props.active ? view.props.onPause : view.props.onStart}>{view.props.active ? 'II' : '►'}
    </button>
    <button disabled={!view.props.active} onClick={view.props.onSave}>✔︎</button>
  </display>
}

