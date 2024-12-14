import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import { Cards, MainContainer, RecipeHeader } from "./HomeStyles";

const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <MainContainer>
      {recipes.map((yemek, index) => (
        <Cards key={index}>
          <RecipeHeader>{yemek.recipe.label}</RecipeHeader>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
