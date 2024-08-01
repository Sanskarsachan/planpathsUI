import React from "react";
import styled from "styled-components";

const learningPathData = [
  { color: "rgba(255, 71, 70, 1)", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/66d03c546e375f28faf77ec895fc9e83b5235f58c0f6a1c174d4aba50409b460?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" },
  { color: "rgba(96, 58, 200, 1)", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3def3ff25bc46d2b368900bcc744f0b2c1427431148642be916910aee0259d8c?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" },
  { color: "rgba(0, 180, 153, 1)", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/60c7a040f9a4e31b77717b2d5b36ea06393a75e029e025c8b88e5c283baf254f?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" },
];

function LearningPathSection() {
  return (
    <Main>
    <Section>
      <Container>
        <TextColumn>
          <Heading>
            It's easy to create <br /> learning <br /> path
          </Heading>
        </TextColumn>
        <ImageColumn>
          <ImageWrapper>
            {learningPathData.map((item, index) => (
              <CircleImage key={index} color={item.color} src={item.src} />
            ))}
          </ImageWrapper>
        </ImageColumn>
      </Container>
    </Section>
    </Main>
  );
}

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

const Section = styled.section`
  border-radius: 32px;
  background-color: rgba(243, 239, 255, 1);
  align-self: center;
  margin-top: 100px;
  width: 100%;
  max-width: 1066px;
  padding: 27px 47px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 20px;
    border-radius: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 21%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  color: rgba(49, 34, 92, 1);
  font: 700 44px Google Sans, sans-serif;
  @media (max-width: 991px) {
    font-size: 32px;
    text-align: center;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 79%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  align-self: stretch;
  margin: auto 0;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const CircleImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  max-width: 205px;
  border-radius: 50%;
  flex-grow: 1;
  border: 1px dashed ${(props) => props.color};
  @media (max-width: 991px) {
    width: 80%;
    max-width: 180px;
  }
`;

export default LearningPathSection;