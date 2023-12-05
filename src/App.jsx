import "./App.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";

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
