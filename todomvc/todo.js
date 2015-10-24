view Todo {
  let newTitle, completed, editing
  let editTitle = ^todo.title

  on('update', () => {
    newTitle = ^todo.title
    completed = ^todo.done
  })

  on('props', () => {
    if (^editing) {
      setTimeout(() => {
        let edit = view.refs.edit
        edit.select()
      })
    }
  })

  <li class={{ completed, editing: ^editing }}>
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        checked={completed}
        onChange={^onToggle}
      />
      <label if={!^editing} onDoubleClick={^onEdit}>
        {^todo.title}
      </label>
      <button class="destroy" onClick={^onDestroy} />
    </div>
    <input
      if={^editing}
      class="edit"
      ref="edit"
      sync={newTitle}
      onBlur={^onCancel}
      onEnter={() => ^onSave(newTitle)}
    />
  </li>
}
