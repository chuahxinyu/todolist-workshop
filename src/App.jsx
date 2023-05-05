import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Buy Milk",
      done: false,
    },
    {
      id: 2,
      title: "Call Mom",
      done: true,
    },
  ]);
  const [title, setTitle] = useState("");

  const createTodo = (e) => {
    e.preventDefault();
    console.log(title);

    const lastTodoId = todos[todos.length - 1].id;
    const newTodo = {
      id: lastTodoId + 1,
      title: title,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form onSubmit={(e) => createTodo(e)}>
        <input
          placeholder="Enter new task"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
            console.log(title);
          }}
        ></input>
        <button type="submit">New Task</button>
      </form>
      <ul>
        {todos.map((task, i) => (
          <li key={task.id}>
            <input type="checkbox" />
            {i} {task.title}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
