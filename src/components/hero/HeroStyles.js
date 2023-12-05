import styled from "styled-components";

export const HeroContainer = styled.div`
  color: black;
  padding: 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: 768px) {
    min-width: 0;
    text-align: center;
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
  }
`;

export const Text = styled.div`
  min-width: 250px;
  width: 355px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  // margin-right: 30px;
  font-size: 20px;
  gap: 20px;

  a {
    text-align: center;
    border: 2px solid black;
    color: black;
    text-decoration: none;
    width: 130px;
    padding: 10px 10px;
    background: none;
    border-radius: 50px;
    font-family: "Outfit";
    font-weight: 600;
    font-size: 20px;

    &:hover {
      background: black;
      color: white;
      transition: 0.1s;
    }
  }
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  flex: none;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
