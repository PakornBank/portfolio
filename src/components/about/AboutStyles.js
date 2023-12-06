import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  h1 {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Text = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex: 1;
`;
