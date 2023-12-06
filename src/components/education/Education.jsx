import {
  EducationContainer,
  University,
  Course,
  Container,
} from "./EducationStyles";

export default function Education() {
  return (
    <EducationContainer id="education">
      <h1>Education</h1>
      <Container>
        <University>
          <h2>
            Bachelor of Engineering Program in Computer Engineering and Digital
            Technology
          </h2>
          <h3>Chulalongkorn University</h3>
          <p>
            Currently pursuing a degree in Computer Engineering and Digital
            Technology at Chulalongkorn University, with an expected completion
            in 3.5 years. The program offers a comprehensive curriculum that
            integrates fundamental and advanced concepts in computer
            engineering. As an integral part of the curriculum, I will be
            engaging in internships every year, starting from this year. These
            internships are structured to provide hands-on experience and deeper
            industry insights, enriching my academic learning with practical
            application and preparing me for the challenges in the industry.
          </p>
        </University>
        <Course>
          <h2>Relevant Coursework</h2>

          <ul>
            <li>
              <h3>Data Structures and Algorithms</h3>
              <p>(Chulalongkorn University)</p>
            </li>
            <li>
              <h3>Full Stack JavaScript</h3>
              <a href="https://www.theodinproject.com/">(The Odin Project)</a>
            </li>
            <li>
              <h3>The Web Developer Bootcamp</h3>
              <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                (Udemy)
              </a>
            </li>
          </ul>
        </Course>
      </Container>
    </EducationContainer>
  );
}
