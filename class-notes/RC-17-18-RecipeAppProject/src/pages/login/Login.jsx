import React, { useContext } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";

import meal from "../../assets/meal.svg";
import { RecipeContext } from "../../context/RecipeProvider";

const Login = () => {
  // Consume islemi:

  const { name, setName, password, setPassword } = useContext(RecipeContext);
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />

        <Header>
          {"<CLARUSWAY/>"} <span>Recipe</span>
        </Header>

        <StyledForm>
          <StyledInput
            type="text"
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
