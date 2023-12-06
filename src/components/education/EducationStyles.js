import styled from "styled-components";

export const EducationContainer = styled.div`
  margin: 5% 0;
  h1 {
    margin: 0;
  }
`;

export const Container = styled.div`
    display: flex;
    gap: 5%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
  }
`;

export const University = styled.div`
  flex: 1;
  h2 {
    margin-bottom: 0;
  }
  h3 {
    font-weight: 500;
    margin-top: 0;
  }
`;

export const Course = styled.div`
  flex: 1;
  li {
    margin: 20px 0;
    list-style-type: initial;
  }
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  a {
    margin: 0;
    text-decoration: underline;
  }
`;
