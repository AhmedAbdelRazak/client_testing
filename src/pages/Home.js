import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <div>Hello From Home Page</div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  min-height: 1600px;
`;
