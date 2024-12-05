import styled from "styled-components";

const ButtonS = styled.button`
  color: red;
  border: 5px solid red;
  cursor: pointer;
  padding: 1rem 1.5rem;

  background-color: ${({ fatma }) => (fatma ? "blue" : "lightgreen")};

  &:hover {
    transform: scale(0.9);
  }
`;

export const YanciButton = styled(ButtonS)`
  width: 330px;
  font-size: 3rem;
  background-color: aqua;

  color: ${({ gokhan }) => (gokhan ? "coral" : "black")};

  height: ${({ kazim }) => (kazim ? kazim : "150px")};
`;

export default ButtonS;
