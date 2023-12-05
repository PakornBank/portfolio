import { getImageUrl } from "../../utils.js";

import {
  HeroContainer,
  Text,
  ImageContainer,
  StyledImage,
} from "./HeroStyles.js";

export default function Hero() {
  return (
    <HeroContainer>
      <Text>
        <h1>
          Hi,<br></br>I'm Pakorn
        </h1>
        <p>
          I am a first-year student studying Computer Engineering and Digital
          Technology at Chulalongkorn University, currently at the beginning of
          my journey as a developer. Right now, I'm pursuing a career in web
          development.
        </p>
        <a href="#contact">Contact Me</a>
      </Text>
      <ImageContainer>
        <StyledImage src={getImageUrl("hero/me.jpeg")} alt="Photo of me" />
      </ImageContainer>
    </HeroContainer>
  );
}
