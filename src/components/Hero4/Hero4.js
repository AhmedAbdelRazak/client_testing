import React from "react";
import styled from "styled-components";
import CrystalImage from "../../images/CrystalImage.png";

const Hero4 = () => {
  return (
    <Hero4Container>
      <LeftSide>
        <TextContent>
          <Title>Find the Perfect Gift</Title>
          <Subtitle>For Every Occasion</Subtitle>
          <Description>
            Discover our exclusive range of gifts to make your special moments
            even more memorable.
          </Description>
          <CallToAction>Shop Now</CallToAction>
        </TextContent>
      </LeftSide>
      <RightSide></RightSide>
      <MobileOverlay>
        <Overlay>
          <TextContent>
            <Title>Find the Perfect Gift</Title>
            <Subtitle>For Every Occasion</Subtitle>
            <Description>
              Discover our exclusive range of gifts to make your special moments
              even more memorable.
            </Description>
            <CallToAction>Shop Now</CallToAction>
          </TextContent>
        </Overlay>
      </MobileOverlay>
    </Hero4Container>
  );
};

export default Hero4;

// Container for the hero component with a split layout
const Hero4Container = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  background-color: #f7f7f7; /* Light background color */

  @media (max-width: 768px) {
    height: 100vh;
    background: url(${CrystalImage}) no-repeat center center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

// Left side of the hero component
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff; /* White background */
  padding: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Right side of the hero component
const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${CrystalImage}) no-repeat center center;
  background-size: cover; /* Cover the entire right side */

  @media (max-width: 768px) {
    display: none;
  }
`;

// Container for the text content on the left side
const TextContent = styled.div`
  max-width: 500px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    color: white;
    // background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
`;

// Styled component for the title
const Title = styled.h1`
  font-size: 3em;
  margin: 0;
  color: #333; /* Dark text color */
  font-family: "Montserrat", sans-serif;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5em;
    color: white;
  }
`;

// Styled component for the subtitle
const Subtitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  color: #777; /* Gray text color */
  font-family: "Montserrat", sans-serif;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.2em;
    color: white;
  }
`;

// Styled component for the description
const Description = styled.p`
  font-size: 1.1em;
  margin: 20px 0;
  color: #555; /* Medium gray text color */
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1em;
    color: white;
  }
`;

// Styled component for the call-to-action button
const CallToAction = styled.button`
  background-color: #ff7f50;
  color: white;
  font-size: 1.2em;
  padding: 10px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background-color: #ff6347;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 10px 20px;
  }
`;

// Overlay for mobile view to ensure text readability
const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

// Semi-transparent overlay for better text visibility
const Overlay = styled.div`
  @media (max-width: 768px) {
    position: absolute; /* Absolute positioning */
    top: 0; /* Top of the container */
    left: 0; /* Left of the container */
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(
      0,
      0,
      0,
      0.3
    ); /* Semi-transparent black background */
    display: flex; /* Flexbox layout */
    justify-content: center; /* Center alignment */
    align-items: center; /* Center alignment */
  }
`;
