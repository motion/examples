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
  let newTitle = ""
  let filter = "all"

  let todos = []

  const create = () => {
    todos = todos.concat([{ id: uuid(), title: newTitle, done: false }])
    newTitle = ""
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

  // Mutable fn
  const saveTodo = (title, todo) => {
    editing = null
    todos = save(title, todo, todos)
  }

  <div class="todomvc-wrapper">
    <div class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          value={newTitle}
          onKeyDown={e => newTitle = e.target.value}
          onEnter={create}
        />
      </header>

      <section class="main" lazyId={3} lazy={['todos', 'filter']}>
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

      <footer class="footer" lazyId={2} lazy={['filter', 'todos']}>
        <span class="todo-count">
          <strong>{totalIncomplete()}</strong>
          item{totalIncomplete() !== 1 ? "s" : ""} left
        </span>
        <ul class="filters" repeat={["all", "done", "active"]}>
          <li>
            <a class={{ selected: filter == _}}
               onClick={() => filter = _}>
              {capitalize(_)}
            </a>
          </li>
        </ul>
        <button class="clear-completed" click={() => todos = todos.filter(filterFn.done)}>
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