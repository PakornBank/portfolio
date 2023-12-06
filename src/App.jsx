import "./App.css";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Contact from "./components/contact/Contact.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Projects from "./components/projects/Projects.jsx";
import Education from "./components/education/Education.jsx";

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
        <hr />
        <Education></Education>
        <hr />
        <Projects></Projects>
      </main>
      <Contact></Contact>
    </>
  );
}

export default App;
