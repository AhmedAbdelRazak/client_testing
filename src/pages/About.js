import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutWrapper>
      <div>Hello From About Page</div>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  min-height: 1600px;
  padding-top: 80px;
`;
