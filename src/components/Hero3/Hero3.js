/** @format */

import React from "react";
import styled, { keyframes } from "styled-components";
import wave1 from "./wave1.png";
import SampleImage from "../../images/CrystalImage.png"; // Sample image path
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

// Keyframes for star blinking effect
const blink = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

// Function to generate random blink animation delays for stars
const getRandomDelay = () => `${Math.random() * 2}s`;

const Hero3 = () => {
  return (
    <Hero3Container>
      <Overlay>
        <Stars>
          {Array.from({ length: 50 }).map((_, index) => (
            <Star
              key={index}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: getRandomDelay(),
              }}
            />
          ))}
        </Stars>
        <Content>
          <LeftContent>
            <GlowingText>
              Serene Jannat, Real Gift Store <WinkingEmoji />
            </GlowingText>
            <CallToAction>Shop Now</CallToAction>
          </LeftContent>
          <RightContent>
            <StyledImage src={SampleImage} alt="Sample" />
          </RightContent>
        </Content>
      </Overlay>
      <WaveContainer>
        <Wave src={wave1} alt="Wave" />
      </WaveContainer>
    </Hero3Container>
  );
};

export default Hero3;

// Container for the hero component with a dark background
const Hero3Container = styled.div`
  width: 100%; /* Full width */
  height: 60vh; /* 60% of the viewport height */
  background-color: #141414; /* Dark background */
  display: flex; /* Flexbox layout */
  justify-content: center; /* Center alignment */
  align-items: center; /* Center alignment */
  position: relative; /* Position relative for the overlay */
  color: white; /* Text color */
  overflow: hidden; /* Hide overflow for waves */
  @media (max-width: 1200px) {
    height: 75vh;
  }
`;

// Semi-transparent overlay for better text visibility
const Overlay = styled.div`
  position: absolute; /* Absolute positioning */
  top: 0; /* Top of the container */
  left: 0; /* Left of the container */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex; /* Flexbox layout */
  justify-content: center; /* Center alignment */
  align-items: center; /* Center alignment */
`;

// Container for stars
const Stars = styled.div`
  position: absolute; /* Absolute positioning */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Hide overflow */
`;

// Styled component for individual star
const Star = styled.div`
  position: absolute; /* Absolute positioning */
  width: 2px; /* Star size */
  height: 2px; /* Star size */
  background-color: white; /* Star color */
  border-radius: 50%; /* Round shape */
  opacity: 0.2; /* Initial opacity */
  animation: ${blink} 2s infinite; /* Blinking animation */
`;

// Container for content
const Content = styled.div`
  display: flex; /* Flexbox layout */
  align-items: center; /* Center alignment */
  gap: 10px; /* 10px gap between left and right content */
  width: 80%; /* Width of the content container */
  justify-content: center; /* Center align the content */
`;

// Left content container
const LeftContent = styled.div`
  display: flex; /* Flexbox layout */
  flex-direction: column; /* Column layout */
  align-items: flex-start; /* Align items to the start */
`;

// Styled component for glowing text
const GlowingText = styled.h1`
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
  display: flex; /* Flexbox layout */
  align-items: center; /* Center alignment */

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
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

// Right content container
const RightContent = styled.div`
  display: flex; /* Flexbox layout */
  align-items: center; /* Center alignment */
  justify-content: center; /* Center alignment */
`;

// Styled component for the image
const StyledImage = styled.img`
  border-radius: 10px; /* Border radius for the image */
  width: 100%; /* Full width */
  max-width: 300px; /* Maximum width */
  height: auto; /* Maintain aspect ratio */
`;

// Container for the wave image
const WaveContainer = styled.div`
  position: absolute; /* Absolute positioning */
  bottom: 0; /* Bottom of the container */
  left: 0; /* Left of the container */
  width: 100%; /* Full width */
  overflow: hidden; /* Hide overflow */
  line-height: 0; /* Remove line height */
`;

// Styled component for the wave image
const Wave = styled.img`
  display: block; /* Display as block */
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
`;
