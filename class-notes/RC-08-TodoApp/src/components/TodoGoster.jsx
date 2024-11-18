import React from "react";

const TodoGoster = ({ datam, SetDatam }) => {
  const deleteTodo = (id) => {
    SetDatam(datam.filter((d) => d.id !== id));
  };
  return (
    <div>
      {datam.map((d) => (
        <div key={d.id}>
          <p>{d.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoGoster;
