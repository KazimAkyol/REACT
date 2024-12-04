import React, { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";

//! 1-context alani aciyoruz
export const StudentContext = createContext();

const App = () => {
  const [students, setStudents] = useState(data);
  return (
    //! 2-bütün projeye gönderilebilsin diye ilk olarak Home sayfasini gönderilecek verilerle ve contextle sarmallayalim

    <StudentContext.Provider value={{ students }}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
