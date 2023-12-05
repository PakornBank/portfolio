import styled from "styled-components";
import React from "react";

// This is for filtering out props to pass to the styled component
const withFilteredProps = (Component) => {
  return ({ isOpen, ...props }) => {
    return <Component {...props} />;
  };
};

export const NavBarContainer = styled.nav`
  a {
    color: white;
  }
  background-color: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 600;
  padding: 2% 12.5%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledMenuItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    margin: 0;
    padding: 20px 30px;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    border-radius: 10px;
    background-color: rgba(49, 49, 49);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(49, 49, 49, 0.8) 100%
    );
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const MenuItems = withFilteredProps(StyledMenuItems);

export const MenuItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  font-weight: 500;
`;

export const Menu = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0px;
    margin-right: 10%;
    flex-direction: column;
    align-items: flex-end;
    gap: 11px;
    z-index: 3;
  }
`;

export const MenuButton = styled.img`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
