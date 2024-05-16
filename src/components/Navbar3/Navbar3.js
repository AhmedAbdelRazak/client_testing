import React, { useState } from "react";
import { Layout, Drawer } from "antd";
import styled from "styled-components";
import Navbar3Top from "./Navbar3Top";
import Navbar3Bottom from "./Navbar3Bottom";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar3 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Navbar3Wrapper>
      <Layout>
        <StyledHeader>
          <Navbar3Top toggleDrawer={toggleDrawer} />
          <Navbar3Bottom />
        </StyledHeader>
        <Drawer
          placement="left"
          onClose={toggleDrawer}
          open={isDrawerOpen}
          closable={false}
          bodyStyle={{ backgroundColor: "rgb(108,108,108)" }}
        >
          <DrawerHeader>
            <CloseIcon onClick={toggleDrawer} />
          </DrawerHeader>
          <DrawerLogo>Arvato</DrawerLogo>
          <DrawerLine />
          <DrawerMenu>
            <DrawerLink to="/" onClick={toggleDrawer}>
              <AiOutlineHome /> Home
            </DrawerLink>
            <DrawerLink to="/our-products" onClick={toggleDrawer}>
              <AiOutlineAppstore /> Products
            </DrawerLink>
            <DrawerLink to="/about" onClick={toggleDrawer}>
              <AiOutlineInfoCircle /> About
            </DrawerLink>
            <DrawerLink to="/contact" onClick={toggleDrawer}>
              <AiOutlineMail /> Contact Us
            </DrawerLink>
            <DrawerLinkSeparator />
            <DrawerLink
              to="/login"
              onClick={toggleDrawer}
              style={{ fontWeight: "bold", color: "#e2e2e2" }}
            >
              <AiOutlineLogin /> Login
            </DrawerLink>
            <DrawerLink
              to="/register"
              onClick={toggleDrawer}
              style={{ fontWeight: "bold", color: "#e2e2e2" }}
            >
              <AiOutlineUserAdd /> Register
            </DrawerLink>
          </DrawerMenu>
        </Drawer>
      </Layout>
    </Navbar3Wrapper>
  );
};

export default Navbar3;

const Navbar3Wrapper = styled.div`
  background: black;
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
  padding: 20px 0;
`;

const DrawerLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: #fff;
  margin: 0 auto 20px;
`;

const DrawerMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const DrawerLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 10px 0;
  font-size: 16px;
  padding: 10px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 10px;
  }

  &:hover,
  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;

const DrawerLinkSeparator = styled.div`
  margin: 10px 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;
