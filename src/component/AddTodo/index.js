import { useState } from "react";
import "./style.css";

function AddTodo({ list, setList }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [num, setNum] = useState(3);

  function ModName(e) {
    setName(e.target.value);
  }
  function ModAge(e) {
    setAge(e.target.value);
  }
  const AddTodo = () => {
    if (name === "" || age === 0) {
      alert("please type them all");
    } else {
      setNum(num + 1);
      setList([
        ...list,
        {
          id: num,
          name: name,
          age: age,
        },
      ]);
      setName("");
      setAge(0);
    }
  };

  return (
    <footer>
      <input
        onChange={ModName}
        type="text"
        placeholder="Type Your Name"
        value={name}
      />
      <input
        onChange={ModAge}
        type="number"
        placeholder="Type Your Age"
        value={age}
      />
      <button onClick={AddTodo}>Add Todo</button>
    </footer>
  );
}

export default AddTodo;
