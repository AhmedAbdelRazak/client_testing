import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Import for cart icon

const NavbarBottom = () => {
  const [clickedLink, setClickedLink] = useState("home");

  useEffect(() => {
    const handleLocationChange = () => {
      // Matches the current pathname with the link state
      const path = window.location.pathname;
      if (path === "/") {
        setClickedLink("home");
      } else if (path === "/our-products") {
        setClickedLink("products");
      } else if (path === "/about") {
        setClickedLink("about");
      } else if (path === "/contact") {
        setClickedLink("contact");
      } else {
        setClickedLink(""); // No active state if the path doesn't match
      }
    };

    // Call once and also add an event listener for future updates
    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts.

  const handleNavLinkClick = (link) => {
    setClickedLink(link);
  };

  return (
    <NavbarBottomWrapper>
      <NavLinks>
        <NavLink
          href="/"
          onClick={() => handleNavLinkClick("home")}
          className={clickedLink === "home" ? "active" : ""}
        >
          Home
        </NavLink>
        <NavLink
          href="/our-products"
          onClick={() => handleNavLinkClick("products")}
          className={clickedLink === "products" ? "active" : ""}
        >
          Products
        </NavLink>
        <NavLink
          href="/about"
          onClick={() => handleNavLinkClick("about")}
          className={clickedLink === "about" ? "active" : ""}
        >
          About
        </NavLink>
        <NavLink
          href="/contact"
          onClick={() => handleNavLinkClick("contact")}
          className={clickedLink === "contact" ? "active" : ""}
        >
          Contact Us
        </NavLink>
      </NavLinks>
      <CartIcon />
    </NavbarBottomWrapper>
  );
};

export default NavbarBottom;

const NavbarBottomWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5rem; // Consistent with your top navbar styling
  background-color: #333; // Example background color
  color: #fff;

  @media (max-width: 768px) {
    display: none; // This hides the navbar on smaller screens
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex: 1; // Takes up all available space
  justify-content: center; // Centers the links within the nav links div
  align-items: center;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 20px; // Spacing between links
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease; // Smooth transition for hover and active states

  &:hover,
  &.active {
    background-color: #007bff; // Background color for hover and active states
    color: #fff;
  }
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #fff; // Adjust color to match your theme
`;
