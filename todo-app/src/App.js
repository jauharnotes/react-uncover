import { useState } from "react";
import TodoForm from "./components/todos/TodoForm";
import Todos from "./components/todos/Todos";

const todos = [
  {
    id: "01",
    text: "Baca Buku React Uncover",
  },
  {
    id: "02",
    text: "Makan Siang",
  },
  {
    id: "03",
    text: "Main Game",
  }
]

function App() {
  const [arrayTodo, setArrayTodo] = useState(todos);

  const handleDeleteClick = (e) => {
    const newTodos = arrayTodo.filter((item) => item.id !== e.target.id);
    setArrayTodo(newTodos);
  }
   const handleAddTodo = (text) => {
     const newTodos = [...arrayTodo, {id: new Date().getTime().toString(), text: text}];
     setArrayTodo(newTodos);
   }

  return (
    <div className='container'>
      {
        arrayTodo.map((todo) => (
          <Todos key={todo.id} id={todo.id} text={todo.text} onTodoClick={handleDeleteClick}/>
        ))
      }
      <TodoForm onAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;
