import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import styled, { keyframes } from "styled-components";
import CrystalImage from "../../images/CrystalImage.png";
import WinkingEmoji from "../Hero5/WinkingEmoji";

// Main Hero5 component
const Hero5 = () => {
  // Use useEffect to set up star animations
  useEffect(() => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      const duration = Math.random() * 1.5 + 0.5;
      star.style.animationDuration = `${duration * 2}s`; // Set slower animation duration for each star
      star.style.animationDelay = `${Math.random() * 2}s`; // Set random delay for each star
    });
  }, []);

  return (
    <Hero5ContainerWrapper>
      <Hero5Container className="col-md-10 mx-auto">
        {/* Left side with text content */}
        <LeftSide>
          <TextContent>
            <Title>
              Find the Perfect Gift <WinkingEmoji />
            </Title>
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

        {/* Stars effect */}
        <Stars />
      </Hero5Container>
    </Hero5ContainerWrapper>
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

// Stars component to render multiple star elements
const Stars = () => {
  return (
    <>
      {[...Array(30)].map((_, i) => (
        <Star key={i} className="star" />
      ))}
    </>
  );
};

export default Hero5;

// Keyframes for the star blinking animation
const blink = keyframes`
  0%, 100% {
    opacity: 0.2;
    box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.3); // Weak glow at start and end
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.7); // Stronger glow at peak
  }
`;

// Styled component for each star
const Star = styled.div`
  width: 2px;
  height: 2px;
  background: white;
  position: absolute;
  top: ${() => Math.random() * 100}%;
  left: ${() => Math.random() * 100}%;
  animation: ${blink} 4s infinite; // Apply blink animation with slower pace
  z-index: 1; // Set lower z-index to ensure stars are behind the 3D shape
`;

// Wrapper for the entire hero component
const Hero5ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  background-color: black;
  position: relative;
  overflow: hidden;

  svg {
    font-size: 1.5rem;
  }

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
const Hero5Container = styled.div`
  display: flex;
  background-color: black;
  position: relative;
  overflow: hidden;
  z-index: 2; // Ensure the main container is above the stars

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
  z-index: 3; // Ensure the 3D shape is above the stars

  @media (max-width: 768px) {
    display: none;
  }
`;

// Container for the text content
const TextContent = styled.div`
  max-width: 530px;

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
  color: #e2e2e2; /* Dark text color */
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
  color: #ececec; /* Gray text color */
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
  color: #f5f5f5; /* Medium gray text color */
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
