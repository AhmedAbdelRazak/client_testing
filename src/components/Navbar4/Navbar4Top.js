import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar4Top = ({ toggleDrawer }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TopNavbar scrollY={scrollY}>
      <MenuIcon onClick={toggleDrawer} />
      <Logo href="/">Arvato</Logo>
      <CartIconSmallScreen onClick={() => setIsCartOpen(true)} />
      <AuthLinks>
        <StyledLink
          to="/login"
          className={location.pathname === "/login" ? "active" : ""}
        >
          Login
        </StyledLink>
        <StyledLink
          to="/register"
          className={location.pathname === "/register" ? "active" : ""}
        >
          Register
        </StyledLink>
      </AuthLinks>
      <Drawer
        placement="right"
        onClose={() => setIsCartOpen(false)}
        open={isCartOpen}
        closable={false}
      >
        <DrawerHeader>
          <CloseIcon onClick={() => setIsCartOpen(false)} />
        </DrawerHeader>
        <p>Cart is empty</p>
      </Drawer>
    </TopNavbar>
  );
};

export default Navbar4Top;

const TopNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  color: #fff;
  height: 64px;
  background-color: ${({ scrollY }) =>
    scrollY > 50 ? "#4d4d4d" : "#2b2b2b"} !important;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1rem;
    justify-content: space-between;
    position: fixed; /* Make sticky on mobile */
    top: 0;
    width: 100%;
    z-index: 1000;
  }
`;

const Logo = styled.a`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: 768px) {
    flex: 1;
    text-align: center;
  }
`;

const AuthLinks = styled.div`
  display: flex;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bolder;
  padding: 10px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  box-sizing: border-box;

  &:hover,
  &.active {
    background-color: #444;
    color: #fff;
  }
`;

const CartIconSmallScreen = styled(AiOutlineShoppingCart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #fff;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled(AiOutlineMenu)`
  display: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const CloseIcon = styled(AiOutlineClose)`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;
