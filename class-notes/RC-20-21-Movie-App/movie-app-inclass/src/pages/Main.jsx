import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const { filmler } = useContext(FilmContext);
  return (
    <div className="flex justify-center flex-wrap">
      {filmler.map((film) => (
        <MovieCard {...film} />
      ))}
    </div>
  );
};

export default Main;
