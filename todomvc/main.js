const uuid = () => Math.floor(Math.random() * 10000000)
const always = val => (() => val)
const assign = Object.assign
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

view Main {
  const filterFn = {
    active: t => !t.done,
    done: t => t.done,
    all: always(true)
  }

  let editing = null
  let newTitle = ''
  let filter = "all"
  let todos = []

  const create = title => {
    todos = todos.concat([ { id: uuid(), title, done: false } ])
    newTitle = ''
  }

  const setItem = (obj, x, xs) =>
    xs.map(_x => _x.id == x.id ? assign(x, obj) : _x)

  const setDone = (done, t) => assign({ done }, t)

  const toggle = (t, ts) => setItem({ done: !t.done }, t, ts)
  const toggleAll = (done, ts) => ts.map(t => setDone(!t.done, t))
  const destroy = (t, ts) => ts.filter(_t => t != _t)

  const save = (title, t, ts) => setItem({ title }, t, ts)
  const totalIncomplete = () => todos.filter(t => !t.done).length
  const totalComplete = () => todos.filter(t => t.done).length

  const saveTodo = (title, todo) => {
    editing = null
    todos = save(title, todo, todos)
    newTitle = ''
  }

  <div class="todomvc-wrapper">
    <div class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          sync={newTitle}
          onEnter={create}
        />
      </header>

      <section class="main">
        <ul class="todo-list">
          <Todo
            repeat={todos.filter(filterFn[filter])}
            onDestroy={() => todos = destroy(_, todos)}
            onToggle={() => todos = toggle(_, todos)}
            onEdit={() => editing = _}
            editing={editing == _}
            onSave={title => saveTodo(title, _)}
            onCancel={() => editing = null}
            todo={_}
            key={_.id} />
        </ul>
      </section>

      <footer class="footer">
        <span class="todo-count">
          <strong>{totalIncomplete()} </strong>
          item{totalIncomplete() == 1 ? '' : 's'} left
        </span>
        <ul class="filters">
          <li repeat={["all", "done", "active"]}>
            <a class={{ selected: filter == _}}
               onClick={() => filter = _}>
              {capitalize(_)}
            </a>
          </li>
        </ul>
        <button class="clear-completed" click={() => todos = todos.filter(filterFn.active)}>
          Clear completed ({totalComplete()})
        </button>
      </footer>
    </div>
    <Footer />
  </div>
}

view Footer {
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Written by Nick Cammarata & Nate Wienert</p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
}
