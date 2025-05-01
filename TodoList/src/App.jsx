import { useState } from 'react';
import Todos from './todos';

function App() {
  const [todoName, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoChange = (e) => setTodoValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const addTodo = () => {
    if (todoName.trim()) {
      setTodos([...todos, { name: todoName, completed: false }]);
      setTodoValue("");
    }
  };

  const toggleTodo = (index) => {
    const updated = todos.map((todo, i) =>{

      console.log(todo)
      return  i === index ? { ...todo, completed: !todo.completed } : todo
      
    }
  );
  setTodos(updated);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Todo App</h1>
      <Todos todos={todos} toggleTodo={toggleTodo} />
      <div className="form-floating-label mb-3 d-flex gap-2">
        <div className="form-floating mb-3 w-100">
          <input
            type="text"
            className="form-control"
            id="taskInput"
            placeholder="Todo Name"
            value={todoName}
            onChange={handleTodoChange}
            onKeyDown={handleKeyDown}
          />
          <label htmlFor="taskInput">Todo Name</label>
        </div>
        <button onClick={addTodo} className="btn btn-primary mb-3">
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
