import { ProjectsContainer, CardsContainer } from "./ProjectsStyles";
import Card from "../Cards/Card";
import LinkButton from "../Buttons/LinkButton.jsx";
import { getImageUrl } from "../../utils";

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <h1>Project</h1>
      <CardsContainer>
        <Card
          imageLink={getImageUrl("projects/github_project.png")}
          width={"400px"}
        >
          <h2>Coding Battle</h2>
          <h3>Single-page competitive programming website</h3>
          <p>
            Developed a single-page competitive programming website using React
            for the frontend, Express and Node.js for the backend, and MongoDB
            for database management. Integrated Judge0 API for code execution
            and evaluation.
          </p>
          <LinkButton
            link={"https://github.com/PakornBank/final_f2cedt/tree/main"}
          >
            GitHub
          </LinkButton>
        </Card>
      </CardsContainer>
    </ProjectsContainer>
  );
}
