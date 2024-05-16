import React, { useState } from "react";
import { Layout, Drawer, Menu } from "antd";
import styled from "styled-components";
import Navbar4Top from "./Navbar4Top";
import Navbar4Bottom from "./Navbar4Bottom";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar4 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  return (
    <Navbar4Wrapper>
      <Layout>
        <StyledHeader>
          <Navbar4Top toggleDrawer={toggleDrawer} />
          <Navbar4Bottom />
        </StyledHeader>
        <Drawer
          placement="left"
          onClose={toggleDrawer}
          open={isDrawerOpen}
          closable={false}
          bodyStyle={{ backgroundColor: "#2b2b2b" }}
        >
          <DrawerHeader>
            <CloseIcon onClick={toggleDrawer} />
          </DrawerHeader>
          <DrawerLogo>Arvato</DrawerLogo>
          <DrawerLine />
          <DrawerMenu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
          >
            <Menu.Item key="home" style={{ marginBottom: "30px" }}>
              <DrawerLink
                to="/"
                onClick={toggleDrawer}
                className={location.pathname === "/" ? "active" : ""}
              >
                <AiOutlineHome /> Home
              </DrawerLink>
            </Menu.Item>

            <SubMenu
              style={{ marginBottom: "30px" }}
              key="products"
              title={
                <DrawerLink
                  to="/our-products"
                  onClick={(e) => e.preventDefault()}
                  className="submenu-title"
                >
                  <AiOutlineAppstore /> Products
                </DrawerLink>
              }
            >
              <Menu.Item key="/our-products/category1">
                <DrawerLink to="/our-products/category1" onClick={toggleDrawer}>
                  Category 1
                </DrawerLink>
              </Menu.Item>
              <Menu.Item key="/our-products/category2">
                <DrawerLink to="/our-products/category2" onClick={toggleDrawer}>
                  Category 2
                </DrawerLink>
              </Menu.Item>
              <Menu.Item key="/our-products/category3">
                <DrawerLink to="/our-products/category3" onClick={toggleDrawer}>
                  Category 3
                </DrawerLink>
              </Menu.Item>
              <Menu.Item key="/our-products/category4">
                <DrawerLink to="/our-products/category4" onClick={toggleDrawer}>
                  Category 4
                </DrawerLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="about" style={{ marginBottom: "30px" }}>
              <DrawerLink
                to="/about"
                onClick={toggleDrawer}
                className={location.pathname === "/about" ? "active" : ""}
              >
                <AiOutlineInfoCircle /> About
              </DrawerLink>
            </Menu.Item>
            <Menu.Item key="contact" style={{ marginBottom: "30px" }}>
              <DrawerLink
                to="/contact"
                onClick={toggleDrawer}
                className={location.pathname === "/contact" ? "active" : ""}
              >
                <AiOutlineMail /> Contact Us
              </DrawerLink>
            </Menu.Item>
            <Menu.Item key="blogs" style={{ marginBottom: "30px" }}>
              <DrawerLink
                to="/blogs"
                onClick={toggleDrawer}
                className={location.pathname === "/blogs" ? "active" : ""}
              >
                <AiOutlineMail /> Blogs
              </DrawerLink>
            </Menu.Item>
            <DrawerLinkSeparator />
            <MenuItemGroup>
              <Menu.Item
                key="login"
                style={{
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "1.1rem",
                }}
              >
                <DrawerLink
                  to="/login"
                  onClick={toggleDrawer}
                  className={location.pathname === "/login" ? "active" : ""}
                >
                  <AiOutlineLogin /> Login
                </DrawerLink>
              </Menu.Item>
              <Menu.Item
                key="register"
                style={{
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "1.1rem",
                }}
              >
                <DrawerLink
                  to="/register"
                  onClick={toggleDrawer}
                  className={location.pathname === "/register" ? "active" : ""}
                >
                  <AiOutlineUserAdd /> Register
                </DrawerLink>
              </Menu.Item>
            </MenuItemGroup>
          </DrawerMenu>
        </Drawer>
      </Layout>
    </Navbar4Wrapper>
  );
};

export default Navbar4;

const Navbar4Wrapper = styled.div`
  background: #1a1a1a;
`;

const StyledHeader = styled(Header)`
  padding: 0;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

const CloseIcon = styled(AiOutlineClose)`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
`;

const DrawerLogo = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
`;

const DrawerLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: #fff;
  margin: 0 auto 20px;
`;

const DrawerMenu = styled(Menu)`
  background-color: #2b2b2b;
  color: #fff;

  .ant-menu-submenu-title:hover {
    background-color: #444 !important;
    color: #fff !important;
  }

  .ant-menu-item:hover {
    background-color: #444 !important;
    color: #fff !important;
    padding-left: 0px !important;
  }

  .ant-menu-item {
    padding-left: 0px !important;
  }

  .ant-menu-item-selected {
    background-color: #333 !important;
  }

  .ant-menu-submenu-open .ant-menu-submenu-title {
    background-color: #333 !important;
  }

  .ant-menu-submenu-title {
    padding-left: 0px !important;
  }

  .ant-menu {
    padding-left: 24px !important;
  }

  .ant-menu-submenu {
    transition: all 0.3s ease;
  }

  .submenu-title {
    display: flex;
    align-items: center;
    color: #fff !important;
  }

  .submenu-title svg {
    margin-right: 10px;
  }
`;

const DrawerLink = styled(Link)`
  color: #fff !important;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  & svg {
    margin-right: 10px;
  }

  &:hover,
  &.active {
    color: #fff !important;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }
`;

const DrawerLinkSeparator = styled.div`
  margin: 10px 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const MenuItemGroup = styled.div`
  margin-top: 40px; /* Added margin above AuthLinks */
`;
