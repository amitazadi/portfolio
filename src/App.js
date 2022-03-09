import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Aboutme from "./Components/Aboutme/Aboutme";
import Experince from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <hr />
      <Aboutme />
      <hr />
      <Experince />
      <hr />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
