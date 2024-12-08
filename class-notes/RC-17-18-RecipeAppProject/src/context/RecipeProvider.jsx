import { createContext, useEffect, useState } from "react";

//! context alanı create edelim:

export const NeuContext=createContext()


const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const RecipeProvider = () => {
 

  //! Home, header, recipecard da gerekli olan veriler

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

 

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;







  return (
    <NeuContext.Provider></NeuContext.Provider>
  );
};

export default RecipeProvider;
