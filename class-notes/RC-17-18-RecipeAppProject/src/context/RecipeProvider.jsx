import React from "react";

const APP_ID = "58c5091b";
const APP_KEY = "9ced208298cb1fd453c44d6655f88efb";

//! context alanı create edelim:


const RecipeProvider = ({ children }) => {
  //! Home, header, recipecard da gerekli olan veriler:

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  //! Diger bölümlerde kullanilacak degiskenler:

 

  //! Verinin cekildigi bölüm:



  return (
    <div></div>
  );
};

export default RecipeProvider;
