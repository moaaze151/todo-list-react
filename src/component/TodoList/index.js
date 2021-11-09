import React  from "react";
import "./style.css";

function TodoList({ list,setList }) {
  console.log(list);
  const listInfo =
    list.length > 0 ? (
      list.map((e) => {
        return (
          <div className="part" key={e.id}>
            <p>{e.name}</p>
            <p>{e.age}</p>
            <p onClick={() => Remove(e.id)}>x</p>
          </div>
        );
      })
    ) : (
      <p >There's no item to show</p>
    );
  function Remove(id) {
    setList(list.filter((el) => el.id !== id));
  }
  return <div className="content">{listInfo}</div>;
}

export default TodoList;
