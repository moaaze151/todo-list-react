import { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList/index";
import AddTodo from "./component/AddTodo/index";

function App() {
  const [list, setList] = useState([
    { id: 1, name: "Moaaz", age: 24 },
    { id: 2, name: "Omaar", age: 17 },
  ]);

  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="box">
        <header>
          <p>Name</p>
          <p>Age</p>
          <p>Action</p>
        </header>
        <TodoList list={list} setList={setList} />
        <AddTodo list={list} setList={setList} />
      </div>
    </div>
  );
}
export default App;

