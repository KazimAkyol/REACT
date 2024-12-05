import styled from "styled-components";

const ButtonS = styled.button`
  color: red;

  background-color: blue;

  border: 5px solid red;
  cursor: pointer;
  padding: 1rem 1.5rem;

  &:hover {
    transform: scale(0.9);
  }
`;

export const YanciButton = styled(ButtonS)`
  width: 330px;

  font-size: 3rem;
  background-color: aqua;
`;

export default ButtonS;
