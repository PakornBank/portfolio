import styled from "styled-components";

export const LinkButtonStyled = styled.a`
  text-align: center;
  border: 2px solid black;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  background: none;
  border-radius: 50px;
  font-family: "Outfit";
  font-weight: 600;
  font-size: 20px;
  flex: none;
  width: auto;
  max-width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  //   align-self: flex-start;

  &:hover {
    background: black;
    color: white;
    transition: 0.1s;
  }
`;
