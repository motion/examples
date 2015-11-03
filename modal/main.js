view Main {
  let open = false
  
  <button onClick={() => open = true}>open modal</button>
  <Modal if={open} onClose={() => open = false}>
    <h2>hello</h2>
  </Modal>

  $ = {
    color: 'sienna',
    padding: 20
  }
}

view Modal {
  <pane>
    <close onClick={view.props.onClose}>x</close>
    <content>
      {view.props.children}
    </content>
  </pane>
  
  $ = {
    position: 'absolute',
    zIndex: 5000,
    background: 'rgba(0,0,0,.6)',
    left: 0, right: 0, top: 0, bottom: 0,
  }

  $close = { 
    position: 'absolute', 
    fontSize: 45,
    cursor: 'pointer',
    right: 26, 
    top: 0, 
    ":hover": { color: 'black' },
  }
  
  $pane = {
    position: 'relative',
    margin: '300px auto',
    background: 'white',
    width: 400,
    padding: 30,
  }
}