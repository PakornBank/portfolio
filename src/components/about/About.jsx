import { AboutContainer, Container, Text } from "./AboutStyles";

export default function About() {
  return (
    <AboutContainer id="about">
      <h1>About</h1>
      <Container>
        <Text>
          <li>
            <h2>What can I do?</h2>
            <p>
              I have experience building single page web with HTML, CSS,
              MongoDB, Express, React and Node.js, commonly known as the MERN
              tech stack. I also have proficiency in C, C++, and Arduino, and
              also a fundamental in data structure and algorithm.
            </p>
          </li>
          <li>
            <h2>My learning path</h2>
            <p>
              I am currently dedicated to enhancing my skills in web development
              by learning MERN tech stack. And I'm looking forward to learn
              Go-lang as an increment to my skill set.
            </p>
          </li>
          <li>
            <h2>What am I looking for?</h2>
            <p>
              I am looking for a internship as a web developer or software
              engineer. Either front-end, back-end, or full-stack. In hope to
              increase my skills and experience from working in a real-world
              environment.
            </p>
          </li>
        </Text>
      </Container>
    </AboutContainer>
  );
}
