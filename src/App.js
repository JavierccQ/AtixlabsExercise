import React from "react";
import "./App.css";
import "./assets/Fonts/asap-regular.ttf"
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";
import SectionThree from "./components/sectionThree";
import SectionFour from "./components/sectionFour";
import SectionFive from "./components/sectionFive";
import SectionSix from "./components/sectionSix";
import Footter from "./components/Footter";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <div className="container">
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <SectionSix />
      <Footter />
    </div>
  );
}

export default App;
