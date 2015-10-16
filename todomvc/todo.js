view Todo {
  let newTitle, completed

  on('update', () => {
    newTitle = ^todo.title
    completed = ^todo.done
  })

  <li class={{ completed }}>
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        checked={completed}
        onChange={^onToggle}
      />
      <label if={!^editing} onDoubleClick={^onEdit}>
        {^todo.title} {^todo.done.toString()}
      </label>
      <input
        if={^editing}
        sync={newTitle}
        onEnter={() => ^onSave(newTitle)}
      />
      <button class="destroy" onClick={^onDestroy} />
    </div>
  </li>
}
