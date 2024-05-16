import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";

const { SubMenu } = Menu;

const Navbar4Bottom = () => {
  const location = useLocation();
  const [current, setCurrent] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    setCurrent(path);

    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <BottomNavbar isSticky={isSticky}>
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        onClick={(e) => setCurrent(e.key)}
        style={{ flex: 1, justifyContent: "center" }}
        className="custom-ant-menu"
      >
        <MenuItem key="/">
          <StyledLink to="/">Home</StyledLink>
        </MenuItem>
        <SubMenu
          key="our-products"
          title={
            <StyledLink to="/our-products" className="submenu-title">
              Products <AiOutlineDown />
            </StyledLink>
          }
        >
          <Menu.Item key="/our-products/category1">
            <StyledLink2 to="/our-products/category1">Category 1</StyledLink2>
          </Menu.Item>
          <Menu.Item key="/our-products/category2">
            <StyledLink2 to="/our-products/category2">Category 2</StyledLink2>
          </Menu.Item>
          <Menu.Item key="/our-products/category3">
            <StyledLink2 to="/our-products/category3">Category 3</StyledLink2>
          </Menu.Item>
          <Menu.Item key="/our-products/category4">
            <StyledLink2 to="/our-products/category4">Category 4</StyledLink2>
          </Menu.Item>
        </SubMenu>
        <MenuItem key="/about">
          <StyledLink to="/about">About</StyledLink>
        </MenuItem>
        <MenuItem key="/contact">
          <StyledLink to="/contact">Contact Us</StyledLink>
        </MenuItem>
        <MenuItem key="/blogs">
          <StyledLink to="/blogs">Blogs</StyledLink>
        </MenuItem>
      </Menu>
      <CartIcon />
    </BottomNavbar>
  );
};

export default Navbar4Bottom;

const BottomNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5rem;
  color: #fff;
  background-color: rgba(50, 50, 50, 0.9) !important;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "static")};
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }

  .ant-menu-overflow,
  .ant-menu {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .ant-menu-item-active,
  .ant-menu-item-selected {
    background-color: #333 !important;
    color: #fff !important;
  }

  .ant-menu-item:hover,
  .submenu-title:hover {
    background-color: #444 !important;
    color: #fff !important;
    transition: all 0.3s ease;
  }

  .ant-menu-horizontal > .ant-menu-item-selected::after {
    border-bottom: 3px solid #e2e2e2 !important;
  }
`;

const MenuItem = styled(Menu.Item)``;

const StyledLink = styled(Link)`
  color: white !important;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  margin: auto 10px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    padding 0.3s ease;

  &:hover,
  &.active {
    background-color: #333;
    color: #fff;
  }
`;

const StyledLink2 = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    padding 0.3s ease;

  &:hover,
  &.active {
    background-color: lightgrey;
    color: #fff;
  }
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: white;
  margin-right: 20px;
`;
