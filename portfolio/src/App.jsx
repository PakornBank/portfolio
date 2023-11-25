import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <hr />
        <About></About>
        <hr />
        <Experience></Experience>
      </main>
      <footer>
        <Contact></Contact>
      </footer>
    </>
  );
}

export default App;
