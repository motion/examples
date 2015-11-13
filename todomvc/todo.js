view Todo {
  let input = null
  let newTitle, completed, editing
  let editTitle = view.props.todo.title

  on.mount(() => {
    newTitle = view.props.todo.title
  })
  
  on.change(() => {
    completed = view.props.todo.done
  })

  on.props(() => {
    if (view.props.editing) {
      setTimeout(() => input.select())
    }
  })

  <li class={{ completed, editing: view.props.editing }}>
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        checked={completed}
        onChange={view.props.onToggle}
      />
      <label if={!view.props.editing} onDoubleClick={view.props.onEdit}>
        {view.props.todo.title}
      </label>
      <button class="destroy" onClick={view.props.onDestroy} />
    </div>
    <input
      if={view.props.editing}
      class="edit"
      ref={el => input = el}
      sync={newTitle}
      onBlur={view.props.onCancel}
      onEnter={() => view.props.onSave(newTitle)}
    />
  </li>
}
