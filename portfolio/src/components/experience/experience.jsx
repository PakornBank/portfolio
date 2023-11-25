import { getImageUrl } from "../../utils";
import "./experience.css";

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="container">
        <ul className="icons">
          <li>
            <div className="iconBackground">
              <img src={getImageUrl("experience/html.png")} alt="" />
            </div>

            <h2>HTML</h2>
          </li>
          <li>
            <div className="iconBackground">
              <img src={getImageUrl("experience/css.png")} alt="" />
            </div>

            <h2>CSS</h2>
          </li>
          <li>
            <div className="iconBackground">
              <img src={getImageUrl("experience/react.png")} alt="" />
            </div>

            <h2>React</h2>
          </li>
          <li>
            <div className="iconBackground">
              <img src={getImageUrl("experience/node.png")} alt="" />
            </div>

            <h2>Node</h2>
          </li>
          <li>
            <div className="iconBackground">
              <img src={getImageUrl("experience/mongo.png")} alt="" />
            </div>

            <h2>MongoDB</h2>
          </li>
          <li>
            <div className="iconBackground">
              <img src={getImageUrl("experience/cpp.png")} alt="" />
            </div>

            <h2>C++</h2>
          </li>
          <li>
            <div className="iconBackground">
              <img src={getImageUrl("experience/c.png")} alt="" />
            </div>

            <h2>C</h2>
          </li>
          <li>
            <div className="iconBackground">
              <img src={getImageUrl("experience/arduino.png")} alt="" />
            </div>

            <h2>Arduino</h2>
          </li>
        </ul>
        <div className="cards">
          <div className="card">
            <img src={getImageUrl("experience/posn.jpg")} alt="" />
            <h2>Computer Olympiad Camp</h2>
            <h3>CMU, 2021</h3>
            <ul>
              <li>Attended 1st & 2nd camp.</li>
              <li>Learned about algorithms and data structures.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
