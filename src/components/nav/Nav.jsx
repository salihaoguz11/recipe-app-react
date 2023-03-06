import { useState } from "react";
import { Link } from "react-router-dom";
import { Brand, Hamburger, Menu, MenuLink, Navbar } from "./Nav.style";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"Saliha"} </i>
        <span>Recipe</span>
      </Brand>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout">Logout</MenuLink>
      </Menu>
    </Navbar>
  );
};

export default Nav;
