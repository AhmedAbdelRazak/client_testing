import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaHome,
  FaProductHunt,
  FaUserAlt,
  FaMailBulk,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  handleNavLinkClick,
  activeLink,
  setActiveLink,
}) => {
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === "/") {
        setActiveLink("home");
      } else if (path === "/our-products") {
        setActiveLink("products");
      } else if (path === "/about") {
        setActiveLink("about");
      } else if (path === "/contact") {
        setActiveLink("contact");
      } else {
        setActiveLink(""); // No active state if the path doesn't match
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [setActiveLink]); // Include setActiveLink in the dependency array

  return (
    <SidebarWrapper isOpen={isSidebarOpen}>
      <CloseIcon onClick={() => setIsSidebarOpen(false)} />
      <Logo isOpen={isSidebarOpen}>
        <img
          src="https://arvato-supply-chain.com/typo3conf/ext/ui_sitepackage/Resources/Public/assets/img/scm_neu.svg"
          alt="Arvato Logo"
        />
      </Logo>
      <HorizontalLine />
      <NavContainer>
        <StyledLink
          to="/"
          onClick={() => handleNavLinkClick("home")}
          isActive={activeLink === "home"}
        >
          <FaHome /> Home
        </StyledLink>
        <StyledLink
          to="/our-products"
          onClick={() => handleNavLinkClick("products")}
          isActive={activeLink === "products"}
        >
          <FaProductHunt /> Products
        </StyledLink>
        <StyledLink
          to="/about"
          onClick={() => handleNavLinkClick("about")}
          isActive={activeLink === "about"}
        >
          <FaUserAlt /> About
        </StyledLink>
        <StyledLink
          to="/contact"
          onClick={() => handleNavLinkClick("contact")}
          isActive={activeLink === "contact"}
        >
          <FaMailBulk /> Contact Us
        </StyledLink>
      </NavContainer>
      <AuthLinksContainer>
        <StyledLink
          to="/login"
          onClick={() => handleNavLinkClick("login")}
          isActive={activeLink === "login"}
        >
          <FaSignInAlt /> Login
        </StyledLink>
        <StyledLink
          to="/register"
          onClick={() => handleNavLinkClick("register")}
          isActive={activeLink === "register"}
        >
          <FaUserPlus /> Register
        </StyledLink>
      </AuthLinksContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: #333;
  padding: 20px;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 15;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: white;
  font-size: 24px;
`;

const Logo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  animation: ${(props) =>
    props.isOpen
      ? css`
          ${fadeIn} 2s ease forwards
        `
      : "none"};
  img {
    width: 50%;
    height: auto;
    display: block;
    text-align: center;
    margin: auto;
  }
`;

const HorizontalLine = styled.div`
  width: 75%;
  height: 2px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const NavContainer = styled.div`
  width: 100%;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => (props.isActive ? "#007bff" : "white")};
  font-size: 18px;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 40px;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const AuthLinksContainer = styled.div`
  width: 100%;
  margin-top: 20px; // Space from other links
  a {
    text-decoration: underline;
    font-weight: bolder;
    color: lightgrey;
  }
`;
