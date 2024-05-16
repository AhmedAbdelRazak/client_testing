import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar3Bottom = () => {
  const location = useLocation();
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const path = location.pathname;
    setCurrent(path);
  }, [location]);

  return (
    <BottomNavbar>
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        onClick={(e) => setCurrent(e.key)}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Menu.Item key="/">
          <StyledLink to="/">Home</StyledLink>
        </Menu.Item>
        <Menu.Item key="/our-products">
          <StyledLink to="/our-products">Products</StyledLink>
        </Menu.Item>
        <Menu.Item key="/about">
          <StyledLink to="/about">About</StyledLink>
        </Menu.Item>
        <Menu.Item key="/contact">
          <StyledLink to="/contact">Contact Us</StyledLink>
        </Menu.Item>
      </Menu>
      <CartIcon />
    </BottomNavbar>
  );
};

export default Navbar3Bottom;

const BottomNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5rem;
  color: #fff;
  background-color: rgba(128, 128, 128, 0.3) !important;

  @media (max-width: 768px) {
    display: none;
  }

  .ant-menu-overflow,
  .ant-menu {
    background-color: rgba(0, 0, 0, 0) !important;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover,
  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: black;
  margin-right: 20px;
`;
