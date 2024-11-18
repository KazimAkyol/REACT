import React, { useState } from "react";
import TodoEkle from "../components/TodoEkle";
import TodoGoster from "../components/TodoGoster";
import data from "../helper/Data";

const Home = () => {
  const [datam, setDatam] = useState(data);
  return (
    <div>
      <TodoEkle />

      <TodoGoster datam={datam} />
    </div>
  );
};

export default Home;
