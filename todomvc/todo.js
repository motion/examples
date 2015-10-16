view Todo {
  let newTitle = ^todo.title
  let completed = ^todo.done

  <todo-li class={{ completed }}>
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
      <input
        if={^editing}
        sync={newTitle}
        onEnter={() => ^onSave(newTitle)}
      />
      <button class="destroy" onClick={^onDestroy} />
    </div>
  </todo-li>
}