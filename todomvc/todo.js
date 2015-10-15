view Todo {
  let newTitle = ^todo.title
  let completed = ^todo.done

  <li class={{ completed }}>
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        checked={completed}
        onChange={^onToggle}
      />
      <label show={!^editing} onDoubleClick={^onEdit}>
        {^todo.title}
      </label>
      <input show={^editing} sync={newTitle} onEnter={() => ^onSave(newTitle)} />
      <button class="destroy" onClick={^onDestroy} />
    </div>
  </li>
}