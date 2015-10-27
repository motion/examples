view Display {
  let nothing = () => {}
  
  <display>
    <h1><Time elapsed={^elapsed} /></h1>
    <button disabled={!^active} onClick={^onStop}>◼︎</button>
    <button 
      class={{play:true, active: ^active}} 
      onClick={^active ? ^onPause : ^onStart}>{^active ? 'II' : '►'}
    </button>
    <button disabled={!^active} onClick={^onSave}>✔︎</button>
  </display>
}

