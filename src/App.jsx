import "./App.css";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/contact";
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
