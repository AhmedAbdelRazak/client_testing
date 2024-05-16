import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaProductHunt,
  FaUserAlt,
  FaMailBulk,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

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
  }, [setActiveLink]);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <NavbarWrapper>
        <MenuIcon onClick={() => setIsSidebarOpen(true)} />
        <Logo onClick={() => (window.location.href = "/")}>Arvato</Logo>
        <NavLinks>
          <NavLink
            href="/"
            onClick={() => handleNavLinkClick("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </NavLink>
          <NavLink
            href="/our-products"
            onClick={() => handleNavLinkClick("products")}
            className={activeLink === "products" ? "active" : ""}
          >
            Products
          </NavLink>
          <NavLink
            href="/about"
            onClick={() => handleNavLinkClick("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            About
          </NavLink>
          <NavLink
            href="/contact"
            onClick={() => handleNavLinkClick("contact")}
            className={activeLink === "contact" ? "active" : ""}
          >
            Contact
          </NavLink>
        </NavLinks>
        <CartIcon onClick={() => setIsCartOpen(true)} />
      </NavbarWrapper>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseIcon onClick={() => setIsSidebarOpen(false)} />
        <LogoSidebar>Arvato</LogoSidebar>
        <HorizontalLine />
        <SidebarLinks>
          <SidebarLink
            to="/"
            onClick={() => handleNavLinkClick("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            <FaHome /> Home
          </SidebarLink>
          <SidebarLink
            to="/our-products"
            onClick={() => handleNavLinkClick("products")}
            className={activeLink === "products" ? "active" : ""}
          >
            <FaProductHunt /> Products
          </SidebarLink>
          <SidebarLink
            to="/about"
            onClick={() => handleNavLinkClick("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            <FaUserAlt /> About
          </SidebarLink>
          <SidebarLink
            to="/contact"
            onClick={() => handleNavLinkClick("contact")}
            className={activeLink === "contact" ? "active" : ""}
          >
            <FaMailBulk /> Contact
          </SidebarLink>
        </SidebarLinks>
      </Sidebar>
      <CartDrawer isOpen={isCartOpen}>
        <CloseIcon onClick={() => setIsCartOpen(false)} />
        <CartContent>
          <p>Cart Is Empty</p>
        </CartContent>
      </CartDrawer>
      {(isSidebarOpen || isCartOpen) && (
        <Overlay
          onClick={() => {
            setIsSidebarOpen(false);
            setIsCartOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Navbar2;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition:
    background-color 0.75s ease,
    color 0.75s ease;

  &:hover,
  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;

const CartIcon = styled(FaShoppingCart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #fff;
  margin-right: 100px;

  @media (max-width: 759px) {
    margin-right: 30px;
  }
`;

const MenuIcon = styled(FaBars)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: none;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: #333;
  padding: 20px;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.75s ease;
  z-index: 1001;
  animation: ${(props) => (props.isOpen ? fadeIn : "none")} 0.75s ease;
`;

const CartDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background: #333;
  padding: 20px;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.75s ease;
  z-index: 1001;
  animation: ${(props) => (props.isOpen ? slideIn : "none")} 0.75s ease;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: white;
  font-size: 24px;
`;

const LogoSidebar = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 3px;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
`;

const HorizontalLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: #fff;
  margin: 0 auto 1rem auto;
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 30px;
`;

const SidebarLink = styled(Link)`
  color: ${(props) => (props.className === "active" ? "#007bff" : "#fff")};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const CartContent = styled.div`
  margin-top: 50px;
  color: white;
  font-size: 1.2rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
