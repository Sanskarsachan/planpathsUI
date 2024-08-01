import React from "react";
import styled from "styled-components";

const featureData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd16cffe955c6bfce90b9ef59a783e0ba03fefba97a557709d8dbbd2987163?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9",
    title: "Initiate career learning to conquer the world",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c292b6ee2c8d7ad57dbbb854168d2dcd3670e7f8f78da0bff669e95f8183df?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9",
    title: "Boost college admission chances",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd4e14520d5315e981b7ffa8a78640d92490226ea8d3b41a2edefd59b8e3eb24?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9",
    title: "Balance curriculum rigor & build strong academic profile",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/777d367ba2b4c082e2d46c3f8bb0627d4263994622e71ec763ee04fcc0660d46?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9",
    title: "Follow your dreams & passions",
  },
];

function PlanPathsHero() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTextColumn>
          <HeroTitle>
            Achieve your goals with <BrandName>PlanPaths</BrandName>
          </HeroTitle>
          <HeroDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </HeroDescription>
        </HeroTextColumn>
        <FeatureColumn>
          <FeatureGrid>
            {featureData.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} />
            ))}
          </FeatureGrid>
        </FeatureColumn>
      </HeroContent>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background-color: #f3efff;
  padding: 80px;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }
`;

const HeroTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font: 700 36px 'Google Sans', sans-serif;
  color: #31225c;
`;

const BrandName = styled.span`
  color: #31225c;
`;

const HeroDescription = styled.p`
  margin-top: 19px;
  font: 400 14px 'Google Sans', sans-serif;
  color: #31225c;
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCardWrapper = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 30px 17px;
  border: 1px solid #603ac8;
  @media (max-width: 991px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CardIcon = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 46px;
  border-radius: 50px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
  border: 1px solid #603ac8;
  @media (max-width: 991px) {
    margin-right: 16px;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Google Sans', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  margin-top: 16px;
  @media (max-width: 991px) {
    margin-top: 0;
  }
`;

function FeatureCard({ icon, title }) {
  return (
    <FeatureCardWrapper>
      <CardIcon src={icon} alt="" />
      <CardTitle>{title}</CardTitle>
    </FeatureCardWrapper>
  );
}

export default PlanPathsHero;