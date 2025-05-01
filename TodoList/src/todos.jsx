function Todos({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id={`todo-${index}`}
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          <label
            htmlFor={`todo-${index}`}
            className={`form-check-label ${todo.completed ? 'text-decoration-line-through' : ''}`}
          >
            {todo.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Todos;
