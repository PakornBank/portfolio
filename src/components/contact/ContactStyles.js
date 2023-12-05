import styled from "styled-components";

export const ContactContainer = styled.footer`
  color: white;
  background-color: black;
  padding: 2.5% 12.5% 5% 12.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
      margin: 0 0 15px 0;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    margin: 5px 0;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 15px;
  a {
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  a img {
    width: 30px;
    height: 30px;
  }
`;
