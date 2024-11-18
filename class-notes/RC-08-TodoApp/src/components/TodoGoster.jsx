import React from "react";

const TodoGoster = ({ datam, SetDatam }) => {
  const deleteTodo = (id) => {
    SetDatam(datam.filter((d) => d.id !== id));
  };
  return (
    <div>
      {datam.map((d) => (
        <div key={d.id}>
          <h1>{d.text}</h1>
          <p>{d.day}</p>
          <p>{d.isDone}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoGoster;
