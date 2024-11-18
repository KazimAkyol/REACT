import React from "react";
import TodoEkle from "../components/TodoEkle";
import TodoGoster from "../components/TodoGoster";
import data from "../helper/Data";

const Home = () => {
  return (
    <div>
      <TodoEkle />

      <TodoGoster veri={data} />
    </div>
  );
};

export default Home;
