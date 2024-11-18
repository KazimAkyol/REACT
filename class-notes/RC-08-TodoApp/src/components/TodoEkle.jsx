import React, { useState } from "react";
import Form from "react-bootstrap";

const TodoEkle = ({ datam, setDatam }) => {
  const [yapilacakIs, setYapilacakIs] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setDatam([
      ...datam,
      {
        id: datam.length,
        text: yapilacakIs,
        day: new Date().getDate(),
        isDone: false,
      },
    ]);
  };

  return <div>
      <Form.Control
        placeholder="Search Player.."
        className="w-50 m-auto"
        onChange={(e) => setYapilacakIs(e.target.value)}
      />
  </div>;
};

export default TodoEkle;
