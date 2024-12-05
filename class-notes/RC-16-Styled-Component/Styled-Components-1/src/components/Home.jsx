import React from "react";
import DivStyle from "./style/ContainerStyle";
import Baslik, { LinkStyle } from "./style/HeaderStyle";
import ButtonS, { YanciButton } from "./style/ButonStyle";

const Home = () => {
  return (
    <DivStyle>
      <Baslik>STYLED COMPONENTS</Baslik>

      <LinkStyle href="www">LINKS</LinkStyle>

      <ButtonS>TIKLA1</ButtonS>
      <ButtonS>TIKLA2</ButtonS>
      <ButtonS>TIKLA3</ButtonS>

      <YanciButton>TIKLA4</YanciButton>
      <YanciButton>TIKLA5</YanciButton>
    </DivStyle>
  );
};

export default Home;
