import React from "react";
import DisplaySSS from "./styles/DisplaySSS";
import ImageSSS from "./styles/ImageSSS";
import ButtonSSS from "./styles/ButonSSS";

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <ImageSSS src="./images/logo.png" alt="" />

        <div>
          <ButtonSSS>Apply Courses</ButtonSSS>
          <ButtonSSS>Talk to Adviser</ButtonSSS>
        </div>
      </DisplaySSS>
    </div>
  );
};

export default Header;
