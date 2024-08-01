import React from "react";
import styled from "styled-components";

const CourseSelectionPage = () => {
  return (
    <Main>
      <ContentWrapper>
        <HeroSectionWrapper>
          <Content>
            <Title>
              Smart course selections <br /> for{" "}
              <HighlightText>high school</HighlightText>
            </Title>
            <Description>
              Select the right courses. Explore career paths. Create a
              multi-year plan. Shape your future and give wings to your dreams.
            </Description>
            <ExploreButton>
              <ButtonText>Explore courses</ButtonText>
              <IconWrapper>
                <Icon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/81542f967c34f1d58f1cef95f2e60520274a6666a61c39b3693bcacbb2d142e7?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9"
                  alt="Arrow icon"
                />
              </IconWrapper>
            </ExploreButton>
          </Content>
        </HeroSectionWrapper>
        <CourseImage>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/95bd1c2494e49af9768b407d7694a069a26d72c8a74bb9a24982e89dd4362bc9?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9"
            alt="Course selection illustration"
          />
        </CourseImage>
      </ContentWrapper>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 74px 20px 0;
  box-sizing: border-box;

  @media (max-width: 991px) {
    padding-top: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1096px;
  width: 100%;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  margin-top: 43px;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  color: #31225c;
  font: 700 56px Google Sans, sans-serif;
  margin: 0;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const HighlightText = styled.span`
  color: #f54746;
`;

const Description = styled.p`
  color: #31225c;
  margin-top: 41px;
  font: 500 20px Google Sans, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ExploreButton = styled.button`
  border-radius: 4px;
  background-color: #603ac8;
  display: flex;
  margin-top: 56px;
  width: 168px;
  max-width: 100%;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ButtonText = styled.span`
  color: #ffffff;
  font: 500 14px Google Sans, sans-serif;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 3px;
`;

const Icon = styled.img`
  aspect-ratio: 1.33;
  object-fit: auto;
  object-position: center;
  width: 16px;
`;

const CourseImage = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.39;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 16px;
`;

export default CourseSelectionPage;
