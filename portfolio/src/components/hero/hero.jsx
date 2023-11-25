import { getImageUrl } from "../../utils.js";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <h1>Hi, I'm Pakorn</h1>
        <p>
          I am a first-year student studying Computer Engineering and Digital
          Technology at Chulalongkorn University, currently at the beginning of
          my journey as a developer. Right now, I'm pursuing a career in web
          development.
        </p>
        <a href="mailto:pakorn22120@gmail.com" className="contactMe">
          Contact Me
        </a>
      </div>

      <img
        className="image"
        src={getImageUrl("hero/menubar.png")}
        alt="Photo of me"
      />
    </div>
  );
}
