import React from "react";
import styled from "styled-components";
import Hero1 from "../components/Hero1/Hero1";
import Hero2 from "../components/Hero2/Hero2";
import Hero3 from "../components/Hero3/Hero3";
import Hero4 from "../components/Hero4/Hero4";
import Hero5 from "../components/Hero5/Hero5";

const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <Hero5 />
      </div>

      <div className="mt-5">
        <Hero3 />
      </div>
      <div className="mt-5">
        <Hero1 />
      </div>
      <div className="mt-5">
        <Hero4 />
      </div>
      <div className="mt-5">
        <Hero2 />
      </div>

      <div className="theContent">Here will be the content</div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  min-height: 4000px;
  padding-top: 65px;

  .theContent {
    margin-top: 50px;
  }
`;
