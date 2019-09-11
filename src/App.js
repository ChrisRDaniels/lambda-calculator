import React from "react";
import "./App.css";


import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"

function App() {

  return (
    <div className="container">
      <Logo />
      <Display />
      <Specials />
      <Operators />
      <Numbers />
      <div className="App">
      </div>
    </div>
  );
}

export default App;