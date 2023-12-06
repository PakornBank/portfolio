import { getImageUrl } from "../../utils.js";
import { useState } from "react";
import {
  NavBarContainer,
  MenuItems,
  MenuItem,
  Menu,
  MenuButton,
} from "./NavbarStyles.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBarContainer>
      <a href="/">Portfolio</a>
      <Menu>
        <MenuButton
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <MenuItems $isOpen={menuOpen} onClick={() => setMenuOpen(false)}>
          <MenuItem>
            <a href="#about">About</a>
          </MenuItem>
          {/* <MenuItem><a href="#education">Education</a></MenuItem> */}
          <MenuItem>
            <a href="#experience">Experience</a>
          </MenuItem>
          <MenuItem>
            <a href="#contact">Contact</a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </NavBarContainer>
  );
}
