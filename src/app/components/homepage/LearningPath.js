import React from "react";
import styled from "styled-components";

const LearningPathSection = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3b813c76ec2a7663399247c5bbda5db364c6965971735a4a3e5d98ea92c94a0?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9",
      alt: "Learning path image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3def3ff25bc46d2b368900bcc744f0b2c1427431148642be916910aee0259d8c?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9",
      alt: "Learning path image 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/60c7a040f9a4e31b77717b2d5b36ea06393a75e029e025c8b88e5c283baf254f?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9",
      alt: "Learning path image 3",
    },
  ];

  return (
    <Section>
      <Container>
        <TextColumn>
          <Heading>
            It's easy to create <br /> learning <br /> path
          </Heading>
        </TextColumn>
        <ImageColumn>
          <ImageGrid>
            {images.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </ImageGrid>
        </ImageColumn>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  border-radius: 32px;
  background-color: #f3efff;
  margin: 200px;
  padding: 20px 30px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin: 40px 10px 0 0;
    padding: 0 20px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const TextColumn = styled.div`
  width: 21%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  color: #31225c;
  font: 700 44px Google Sans, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ImageColumn = styled.div`
  width: 79%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 20px;
  align-self: stretch;
  margin: auto 0;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin-top: 40px;
  }
`;

const ImageCard = ({ src, alt }) => {
  return (
    <CardWrapper>
      <StyledImage src={src} alt={alt} loading="lazy" />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  flex: 1;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 4px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  @media (max-width: 991px) {
    transform: rotate(90deg);
  }
`;

export default LearningPathSection;
