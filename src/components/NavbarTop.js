import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa"; // Import for burger menu icon
import { AiOutlineShoppingCart } from "react-icons/ai"; // Import for cart icon
import Sidebar from "./Sidebar";

const NavbarTop = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsSidebarOpen(false); // Closes the sidebar when a link is clicked
  };

  return (
    <>
      {isSidebarOpen && <Overlay onClick={() => setIsSidebarOpen(false)} />}
      <NavbarTopWrapper>
        <MenuIcon onClick={() => setIsSidebarOpen(true)} />
        <Logo
          src="https://res.cloudinary.com/infiniteapps/image/upload/v1715298782/serene_janat/1715298781714.png"
          alt="Logo"
          onClick={() => (window.location.href = "/")}
        />
        <NavLinks>
          <NavLink href="/login">Login</NavLink>
          <NavLink href="/signup">Register</NavLink>
        </NavLinks>
        <CartIcon />
      </NavbarTopWrapper>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        handleNavLinkClick={handleNavLinkClick}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </>
  );
};

export default NavbarTop;

const NavbarTopWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5rem;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    .menu-icon,
    .cart-icon {
      display: none;
    }
    .logo {
      flex-grow: 0; // Keeps the logo to the left
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.5rem;
    .nav-links {
      display: none; // Hides text links on small screens
    }
    .logo {
      flex-grow: 1; // Allows the logo to center on smaller screens
    }
  }
`;

const Logo = styled.img`
  height: 50px; // Adjust based on your logo's aspect ratio
  cursor: pointer;
`;

const MenuIcon = styled(FaBars)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  class: menu-icon;
  color: white;

  @media (min-width: 769px) {
    display: none;
  }
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  class: cart-icon;
  color: white;
  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  class: nav-links;
  @media (max-width: 769px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: #007bff;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;
