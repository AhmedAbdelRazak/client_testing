import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import styled, { keyframes } from "styled-components";
import CrystalImage from "../../images/CrystalImage.png";

// Main Hero6 component
const Hero6 = () => {
  return (
    <Hero6ContainerWrapper>
      <Hero6Container className="col-md-10 mx-auto">
        {/* Left side with text content */}
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

        {/* Right side with rotating cube */}
        <RightSide>
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingCube />
          </Canvas>
        </RightSide>

        {/* Overlay for mobile view */}
        <MobileOverlay>
          <Overlay>
            <TextContent>
              <Title>Find the Perfect Gift</Title>
              <Subtitle>For Every Occasion</Subtitle>
              <Description>
                Discover our exclusive range of gifts to make your special
                moments even more memorable.
              </Description>
              <CallToAction>Shop Now</CallToAction>
            </TextContent>
          </Overlay>
        </MobileOverlay>

        {/* Clouds with rain effect */}
        <Clouds />
      </Hero6Container>
    </Hero6ContainerWrapper>
  );
};

// Rotating cube component
const RotatingCube = () => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, CrystalImage);

  // Use useFrame to rotate the cube continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// Clouds component to render moving clouds with raindrops
const Clouds = () => {
  return (
    <CloudContainer>
      {[...Array(8)].map((_, i) => (
        <CloudWithRain key={i} />
      ))}
    </CloudContainer>
  );
};

// Cloud with raindrops component
const CloudWithRain = () => {
  return (
    <Cloud>
      {[...Array(5)].map((_, i) => (
        <Raindrop key={i} />
      ))}
    </Cloud>
  );
};

export default Hero6;

// Keyframes for the cloud movement animation
const moveClouds = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Keyframes for the raindrop falling animation
const fall = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(200%); // Increase falling distance
  }
`;

// Styled component for each cloud
const Cloud = styled.div`
  position: absolute;
  top: ${() =>
    Math.random() * 20}px; // Distribute clouds vertically within a small range
  left: ${() => Math.random() * 90}%; // Distribute clouds horizontally
  width: 200px; // Increase cloud width
  height: 60px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%; // Make clouds more cloud-like
  animation: ${moveClouds} ${() => Math.random() * 20 + 20}s linear infinite;
  z-index: 1; // Set lower z-index to ensure clouds are behind the 3D shape

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.7);
    width: 150px; // Increase cloud parts width
    height: 60px;
    border-radius: 50%;
  }

  &::before {
    top: -30px;
    left: 10px;
  }

  &::after {
    top: -30px;
    right: 10px;
  }
`;

// Container to hold and position the clouds
const CloudContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100px; // Ensures raindrops fall from the clouds
  overflow: hidden;
`;

// Styled component for each raindrop
const Raindrop = styled.div`
  position: absolute;
  top: 60px; // Start from the bottom of the cloud
  left: ${() =>
    Math.random() * 100}%; // Distribute raindrops horizontally within the cloud
  width: 2px; // Decrease raindrop width
  height: 15px; // Decrease raindrop height
  background: rgba(255, 255, 255, 0.9); // Brighter, whiter raindrops
  border-radius: 50%; // Make raindrops more circular
  animation: ${fall} ${() => Math.random() * 2 + 2}s linear infinite;
  z-index: 2; // Set z-index to ensure raindrops are above the clouds but below the 3D shape
`;

// Wrapper for the entire hero component
const Hero6ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  background-color: #13265a; // Darker blue background to represent the sky
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh;
    background: url(${CrystalImage}) no-repeat center center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

// Main container for the hero component
const Hero6Container = styled.div`
  display: flex;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  z-index: 3; // Ensure the main container is above the clouds and raindrops

  @media (max-width: 768px) {
    height: 100vh;
    background: url(${CrystalImage}) no-repeat center center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

// Left side container
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Right side container
const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4; // Ensure the 3D shape is above the clouds and raindrops

  @media (max-width: 768px) {
    display: none;
  }
`;

// Container for the text content
const TextContent = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    text-align: center;
    color: white;
    padding: 20px;
    border-radius: 10px;
  }
`;

// Styled component for the title text
const Title = styled.h1`
  font-size: 3em;
  margin: 0;
  color: #ffffff; /* White text color */
  font-family: "Montserrat", sans-serif;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5em;
    color: white;
  }
`;

// Styled component for the subtitle text
const Subtitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  color: #ffffff; /* White text color */
  font-family: "Montserrat", sans-serif;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.2em;
    color: white;
  }
`;

// Styled component for the description text
const Description = styled.p`
  font-size: 1.1em;
  margin: 20px 0;
  color: #ffffff; /* White text color */
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1em;
    color: white;
  }
`;

// Styled component for the call-to-action button
const CallToAction = styled.button`
  background-color: #4f4f4f;
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

// Overlay container for mobile view to enhance text readability
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

// Semi-transparent overlay for mobile view
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
