import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import styled, { keyframes } from "styled-components";
import CrystalImage from "../../images/CrystalImage.png";

const Hero5 = () => {
  useEffect(() => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      const duration = Math.random() * 1.5 + 0.5;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;
    });
  }, []);

  return (
    <Hero5ContainerWrapper>
      <Hero5Container className="col-md-10 mx-auto">
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
        <RightSide>
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingCube />
          </Canvas>
        </RightSide>
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
        <Stars />
      </Hero5Container>
    </Hero5ContainerWrapper>
  );
};

const RotatingCube = () => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, CrystalImage);

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

const Stars = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <Star key={i} className="star" />
      ))}
    </>
  );
};

export default Hero5;

const blink = keyframes`
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
`;

const Star = styled.div`
  width: 2px;
  height: 2px;
  background: white;
  position: absolute;
  top: ${() => Math.random() * 100}%;
  left: ${() => Math.random() * 100}%;
  animation: ${blink} 2s infinite;
`;

// Container for the hero component with a split layout
const Hero5ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  background-color: black;
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

// Container for the hero component with a split layout
const Hero5Container = styled.div`
  display: flex;
  background-color: black;
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

// Left side of the hero component
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

// Right side of the hero component
const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Container for the text content on the left side
const TextContent = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    text-align: center;
    color: white;
    padding: 20px;
    border-radius: 10px;
  }
`;

// Styled component for the title
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

// Styled component for the subtitle
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

// Styled component for the description
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
