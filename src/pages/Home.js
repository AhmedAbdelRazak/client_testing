import React from "react";
import styled from "styled-components";
import Hero1 from "../components/Hero1/Hero1";

const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <Hero1 />
      </div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  min-height: 1600px;
  padding-top: 65px;
`;
