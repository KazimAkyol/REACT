import React from "react";

const Events = () => {
  //! JavaScript alani

  let baslik = "MERHABA";
  let sayac = 0;

  const arttir = () => {
    sayac = sayac + 1;

    console.log(sayac);

    document.querySelector("span").textContent = sayac;
  };

  const changeBaslik = (title) => {
    baslik = title;
    console.log(baslik);

    document.querySelector("h1").textContent = title;
  };

  return (
    //! jsx(react) alani

    <div className="container text-center mt-4">
      <h1>INFO:{baslik}</h1>

      <h2>
        COUNT: <span className="text-danger">{sayac}</span>
      </h2>

      <button onClick={arttir} className="btn btn-primary">
        ARTTIR
      </button>
      <button onClick={() => changeBaslik("HALLO")} className="btn btn-info">
        BASLIK DEGISTIR
      </button>
      <button className="btn btn-danger">TIKLANDI</button>
    </div>
  );
};

export default Events;
