import React from "react";
import styled, { keyframes } from "styled-components";
import CrystalImage from "../../images/CrystalImage.png";
import WinkingEmoji from "./WinkingEmoji"; // Importing the SVG component

// Keyframes for subtle glowing text effect
const glow = keyframes`
  from {
    text-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 7px #a0a0a0;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #a0a0a0;
  }
`;

const Hero2 = () => {
  return (
    <Hero2Container>
      <Overlay>
        <Content>
          <GlowingText>
            Serene Jannat, Real Gift Store <WinkingEmoji />
          </GlowingText>
          <CallToAction>Shop Now</CallToAction>
        </Content>
      </Overlay>
    </Hero2Container>
  );
};

export default Hero2;

// Container for the hero component with background image
const Hero2Container = styled.div`
  width: 100%; /* Full width */
  height: 60vh; /* 60% of the viewport height */
  background: url(${CrystalImage}) no-repeat center center; /* Background image */
  background-size: cover; /* Cover the entire container */
  display: flex; /* Flexbox layout */
  justify-content: center; /* Center alignment */
  align-items: center; /* Center alignment */
  position: relative; /* Position relative for the overlay */
`;

// Semi-transparent overlay for better text visibility
const Overlay = styled.div`
  position: absolute; /* Absolute positioning */
  top: 0; /* Top of the container */
  left: 0; /* Left of the container */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex; /* Flexbox layout */
  justify-content: center; /* Center alignment */
  align-items: center; /* Center alignment */
`;

// Container for content
const Content = styled.div`
  text-align: center; /* Center text */
`;

// Styled component for glowing text
const GlowingText = styled.h1`
  display: flex; /* Flexbox layout */
  align-items: center; /* Vertical alignment */
  justify-content: center; /* Center alignment */
  font-size: 2.5em; /* Font size */
  color: lightgray; /* Text color */
  font-weight: bold; /* Bold font */
  font-family: "Cursive", sans-serif; /* Font family */
  text-shadow:
    0 0 3px #fff,
    0 0 5px #fff,
    0 0 7px #a0a0a0; /* Reduced text shadow for less brightness */
  animation: ${glow} 1.5s infinite alternate; /* Subtle glowing animation */
  margin-bottom: 20px; /* Spacing below the text */
`;

// Styled component for call-to-action button
const CallToAction = styled.button`
  background-color: #ff7f50; /* Button background color */
  color: white; /* Button text color */
  font-size: 1.2em; /* Font size */
  padding: 10px 20px; /* Padding */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3); /* Box shadow */
  transition: all 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: #ff6347; /* Background color on hover */
    transform: translateY(-3px); /* Slightly move up on hover */
  }
`;
