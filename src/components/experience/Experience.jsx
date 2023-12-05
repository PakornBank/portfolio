import { getImageUrl } from "../../utils";
import {
  ExperienceContainer,
  Container,
  Icons,
  Icon,
  IconBackground,
  Cards,
  Card,
} from "./ExperienceStyles";

export default function Experience() {
  return (
    <ExperienceContainer id="experience">
      <h1>Experience</h1>
      <Container>
        <Icons>
          <Icon>
            <IconBackground>
              <img src={getImageUrl("experience/html.png")} alt="" />
            </IconBackground>

            <h2>HTML</h2>
          </Icon>
          <Icon>
            <IconBackground>
              <img src={getImageUrl("experience/css.png")} alt="" />
            </IconBackground>

            <h2>CSS</h2>
          </Icon>
          <Icon>
            <IconBackground>
              <img src={getImageUrl("experience/react.png")} alt="" />
            </IconBackground>

            <h2>React</h2>
          </Icon>
          <Icon>
            <IconBackground>
              <img src={getImageUrl("experience/node.png")} alt="" />
            </IconBackground>

            <h2>Node</h2>
          </Icon>
          <Icon>
            <IconBackground>
              <img src={getImageUrl("experience/mongo.png")} alt="" />
            </IconBackground>

            <h2>MongoDB</h2>
          </Icon>
          <Icon>
            <IconBackground>
              <img src={getImageUrl("experience/cpp.png")} alt="" />
            </IconBackground>

            <h2>C++</h2>
          </Icon>
          <Icon>
            <IconBackground>
              <img src={getImageUrl("experience/c.png")} alt="" />
            </IconBackground>

            <h2>C</h2>
          </Icon>
          <Icon>
            <IconBackground>
              <img src={getImageUrl("experience/arduino.png")} alt="" />
            </IconBackground>

            <h2>Arduino</h2>
          </Icon>
        </Icons>
        <Cards>
          <Card>
            <img src={getImageUrl("experience/posn.jpg")} alt="" />
            <h2>Computer Olympiad Camp</h2>
            <h3>CMU, 2021</h3>
            <ul>
              <li>Attended 1st & 2nd camp.</li>
              <li>Learned about algorithms and data structures.</li>
            </ul>
          </Card>
        </Cards>
      </Container>
    </ExperienceContainer>
  );
}
