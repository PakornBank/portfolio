import styled from "styled-components";

export const ExperienceContainer = styled.div`
  margin: 5% 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  @media screen and (max-width: 898px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Icons = styled.ul`
  margin: 0;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 0;
`;

export const Icon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 145px;
  h2 {
    text-align: center;
    margin-top: 0;
    font-weight: 600;
  }
`;

export const IconBackground = styled.div`
  background-color: #00000018;
  border-radius: 50%;
  width: 115px;
  height: 115px;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    flex: none;
    width: 75px;
    height: 75px;
  }
`;

export const Cards = styled.div`
  color: black;
  flex: none;
  display: flex;
  flex-direction: column;
`;
