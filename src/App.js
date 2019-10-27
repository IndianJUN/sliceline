import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu  />
    </>
  );
}

export default App;

//  © created by react.school

