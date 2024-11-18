import React, { useState } from "react";

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

  const handleChange = (e) => {
    setYapilacakIs({ ...datam, [e.target.text]: e.target.value });
  };

  return (
    <div className="todoEkle">
      <form
        className="input-form"
        action="handleSubmit onSubmit={handleSubmit}"
      >
        <input
          className="todoEkle-input todoEkle-input-title"
          name="title"
          type="text"
          placeholder="Enter title"
          onChange={handleChange}
          value={datam.title}
        />
        <button className="todoEkle-btn" type="onSubmit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoEkle;
