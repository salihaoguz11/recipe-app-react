import { useState } from "react";
import { Link } from "react-router-dom";
import { Brand, Menu, MenuLink, Navbar } from "./Nav.style";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar justify="space-between">
      <Brand to="/">
        <i>{"Saliha"}</i>
        <span>Recipe</span>
      </Brand>

      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout">Logout</MenuLink>
      </Menu>
    </Navbar>
  );
};

export default Nav;
