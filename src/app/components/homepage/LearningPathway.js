import React from "react";
import styled from "styled-components";

const LearningPathwayComponent = () => {
  return (
    <StyledLearningPathway>
      <PathwayTitle>Your learning pathway</PathwayTitle>
      <PathwayImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67868ff9fed52029a53a2805d23ca794ae078961f71d2c0e267c64204c48c035?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9"
        alt="Learning pathway illustration"
      />
    </StyledLearningPathway>
  );
};

const StyledLearningPathway = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1rem;
`;

const PathwayTitle = styled.h1`
  font-family: "Google Sans", sans-serif;
  font-size: 44px;
  color: #31225c;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.25rem;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const PathwayImage = styled.img`
  width: 100%;
  max-width: 1122px;
  aspect-ratio: 1.49;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

export default LearningPathwayComponent;