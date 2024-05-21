// src/components/WinkingEmoji.js
import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the winking animation, which changes the dimensions of the right eye
const wink = keyframes`
  0%, 40%, 100% { rx: 3; ry: 4; }  // Eye is in normal state
  20% { rx: 4; ry: 1; }           // Eye is in winking state
`;

// Keyframes for growing and rotating the emoji during the wink
const growAndRotate = keyframes`
  0%, 40%, 100% { transform: scale(1) rotate(0deg); } // Normal size and rotation
  20% { transform: scale(1.2) rotate(10deg); }       // Larger size and slight rotation
`;

// Styled component for the emoji container
const WinkingEmojiContainer = styled.span`
  display: inline-block;
  vertical-align: middle; /* Ensures the emoji aligns with the text */
  svg {
    width: 2em; /* Sets the width of the emoji */
    height: 2em; /* Sets the height of the emoji */
    animation: ${growAndRotate} 4s ease-in-out infinite; /* Animation for grow and rotate, repeating every 4 seconds */
    #right-eye {
      animation: ${wink} 4s ease-in-out infinite; /* Animation for the right eye winking, repeating every 4 seconds */
    }
  }
`;

// SVG Elements:
// circle: Represents the face of the emoji.
// ellipse: Represents the eyes of the emoji.
// circle: Represents the pupils of the eyes.
// path: Represents the smiling mouth of the emoji.

// The WinkingEmoji functional component
const WinkingEmoji = () => (
  <WinkingEmojiContainer>
    <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
      {/* The face of the emoji */}
      <circle
        cx="36"
        cy="36"
        r="23"
        fill="#FCEA2B" /* Face color */
        stroke="#000000"
        strokeWidth="2" /* Outline */
      />
      {/* Left eye */}
      <ellipse
        cx="24.5"
        cy="32"
        rx="3"
        ry="4" /* Equal left eye */
        fill="#000000" /* Eye color */
      />
      {/* Right eye with id for animation */}
      <ellipse
        id="right-eye"
        cx="47.5"
        cy="32"
        rx="3"
        ry="4" /* Equal right eye */
        fill="#000000" /* Eye color */
      />
      {/* Pupils of the eyes */}
      <circle cx="24.5" cy="32" r="1" fill="#FFFFFF" />
      <circle cx="47.5" cy="32" r="1" fill="#FFFFFF" />
      {/* Smiling mouth */}
      <path
        d="M29 44c1.5 3 4.5 5 7.5 5s6-2 7.5-5"
        fill="none"
        stroke="#000000" /* Outline of the mouth */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  </WinkingEmojiContainer>
);

export default WinkingEmoji;
