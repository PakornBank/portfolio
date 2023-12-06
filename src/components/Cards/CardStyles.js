import styled from "styled-components";

export const CardContainer = styled.div`
  width: ${(props) => (props.$width ? props.$width : "auto")};
  height: ${(props) => (props.$height ? props.$height : "auto")};
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  item-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid black;
    margin-bottom: 10px;
  }
  h2,
  h3 {
    margin: 0;
  }
  h3 {
    font-weight: 400;
  }
  ul {
    margin-bottom: 0;
  }

  li {
    list-style-type: initial;
  }
`;
