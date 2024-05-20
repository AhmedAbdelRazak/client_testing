// src/components/Hero1.js
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import styled, { keyframes } from "styled-components";
import CrystalImage from "../../images/CrystalImage.png";
import WinkingEmoji from "./WinkingEmoji"; // Importing the SVG component

// Keyframes for glowing text effect
const glow = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #a0a0a0,
                 0 0 40px #a0a0a0, 0 0 50px #a0a0a0, 0 0 60px #a0a0a0,
                 0 0 70px #a0a0a0;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #a0a0a0,
                 0 0 50px #a0a0a0, 0 0 60px #a0a0a0, 0 0 70px #a0a0a0,
                 0 0 80px #a0a0a0;
  }
`;

const Hero1 = () => {
  return (
    <HeroContainer>
      {/* The Canvas component from @react-three/fiber to render 3D content */}
      <StyledCanvas>
        <ambientLight intensity={0.5} />{" "}
        {/* Ambient light for overall illumination */}
        <pointLight position={[10, 10, 10]} />{" "}
        {/* Point light for highlighting the shapes */}
        <ShapeSequence /> {/* The sequence of shapes with fade-in effect */}
      </StyledCanvas>
      {/* Glowing text component */}
      <GlowingText>
        Serene Jannat, Real Gift Store <WinkingEmoji />
      </GlowingText>
    </HeroContainer>
  );
};

const ShapeSequence = () => {
  const [visibleShapes, setVisibleShapes] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleShapes([true, false, false]), 1500),
      setTimeout(() => setVisibleShapes([true, true, false]), 3500),
      setTimeout(() => setVisibleShapes([true, true, true]), 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <ShapeWrapper isVisible={visibleShapes[0]} position={[-3.5, 0, 0]}>
        <RotatingCube />
      </ShapeWrapper>
      <ShapeWrapper isVisible={visibleShapes[1]} position={[0, 0, 0]}>
        <RotatingPyramid />
      </ShapeWrapper>
      <ShapeWrapper isVisible={visibleShapes[2]} position={[3.5, 0, 0]}>
        <RotatingCylinder />
      </ShapeWrapper>
    </>
  );
};

const ShapeWrapper = ({ isVisible, children, position }) => {
  return (
    <group position={position}>
      <meshStandardMaterial opacity={isVisible ? 1 : 0} transparent />
      <mesh position={position}>
        {React.cloneElement(children, { visible: isVisible })}
      </mesh>
    </group>
  );
};

const RotatingCube = ({ visible }) => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, CrystalImage);

  // Animation loop for rotating the cube
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005; // Slower rotation speed
      meshRef.current.rotation.y += 0.005; // Slower rotation speed
    }
  });

  return (
    <mesh ref={meshRef} visible={visible}>
      {/* Cube geometry */}
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture} />{" "}
      {/* Applying texture to the cube */}
    </mesh>
  );
};

const RotatingPyramid = ({ visible }) => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, CrystalImage);

  // Animation loop for rotating the pyramid
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005; // Slower rotation speed
      meshRef.current.rotation.y += 0.005; // Slower rotation speed
    }
  });

  return (
    <mesh ref={meshRef} visible={visible}>
      {/* Pyramid geometry (tetrahedron) */}
      <tetrahedronGeometry args={[3, 0]} />
      <meshStandardMaterial map={texture} />{" "}
      {/* Applying texture to the pyramid */}
    </mesh>
  );
};

const RotatingCylinder = ({ visible }) => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, CrystalImage);

  // Animation loop for rotating the cylinder
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005; // Slower rotation speed
      meshRef.current.rotation.y += 0.005; // Slower rotation speed
    }
  });

  return (
    <mesh ref={meshRef} visible={visible}>
      {/* Cylinder geometry */}
      <cylinderGeometry args={[1.5, 1.5, 4, 35]} />
      <meshStandardMaterial map={texture} />{" "}
      {/* Applying texture to the cylinder */}
    </mesh>
  );
};

export default Hero1;

// Container for the hero component
const HeroContainer = styled.div`
  width: 100%; /* Full width */
  height: 60vh; /* 60% of the viewport height */
  display: flex; /* Flexbox layout */
  flex-direction: column; /* Column layout */
  align-items: center; /* Center alignment */
  justify-content: center; /* Center alignment */
  background-color: #000; /* Black background */
  position: relative; /* Relative positioning for absolute children */
`;

// Styled Canvas component
const StyledCanvas = styled(Canvas)`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
`;

// Styled component for glowing text
const GlowingText = styled.h1`
  display: flex; /* Flexbox layout */
  align-items: center; /* Vertical alignment */
  font-size: 2em; /* Font size */
  color: lightgray; /* Text color */
  font-weight: bold; /* Bold font */
  font-family: "Cursive", sans-serif; /* Font family */
  text-shadow:
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 30px #a0a0a0,
    0 0 40px #a0a0a0,
    0 0 50px #a0a0a0,
    0 0 60px #a0a0a0,
    0 0 70px #a0a0a0; /* Text shadow for glowing effect */
  animation: ${glow} 1.5s infinite alternate; /* Glowing animation */
`;
