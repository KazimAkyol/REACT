import React, { useContext } from "react";
import { StudentContext } from "../App";

const OgrenciItem = () => {
  //! 3-(context consumer) gloabalde (mesela App.js'de) tanimladigim degerleri buraya cagiralim

  const { students, changeColor } = useContext(StudentContext);

  return (
    <div>
      {students.map((a) => (
        <div key={a.id} style={{ background: a.color }}>
          <h3>NAME: {a.name} </h3>
          <h4>EMAIL: {a.email}</h4>
          <h4>AGE: {a.age}</h4>
          Color:
          <input
            type="text"
            value={a.color}
            onChange={(e) => changeColor(a.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default OgrenciItem;
