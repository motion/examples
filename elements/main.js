view Main {
  <Name />
  <Foos />
}

view Name {
  let name = "nick"

  <button onClick={() => view.element('input').focus()}>focus</button>
  <input sync={name} />

  $ = { padding: 20, }
  $button = { fontSize: 20, }
  $input = { fontSize: 20, marginLeft: 20, }

}

let remove = el => { el.parentNode.removeChild(el) }
view Foos {
  <button onClick={() => remove(view.element('foo'))}>
    kill foo
  </button>

  <button onClick={() => view.elements('foo').map(remove)}>
    kill all foos
  </button>

  <foos>
    <foo>im foo one</foo>
    <foo>im foo two</foo>
    <foo>im foo three</foo>
    <foo>im foo four</foo>
  </foos>

  $ = { margin: 20, }
  $foo = {
    fontSize: 25,
    marginTop: 20,
  }

  $button = { fontSize: 20, padding: 20, marginRight: 10 }

}
