import React from "react";
import styled from "styled-components";

const GradeCards = () => {
  const grades = [
    {
      grade: "9th grade",
      track: "Regular track",
      courses: [
        "English 1",
        "Algebra 1",
        "World history",
        "PE Elective (1 credit)",
        "Earth space science or physical science",
        "Fine Art/CTE elective (1 Credit)",
      ],
    },
    {
      grade: "10th grade",
      track: "Advanced track",
      courses: [
        "English 2",
        "Geometry",
        "Biology",
        "World Geography",
        "Foreign Language 1",
        "Elective",
      ],
    },
    {
      grade: "11th grade",
      track: "Honors track",
      courses: [
        "AP English Language",
        "Algebra 2",
        "Chemistry",
        "U.S. History",
        "Foreign Language 2",
        "AP Elective",
      ],
    },
    {
      grade: "12th grade",
      track: "College Prep",
      courses: [
        "AP English Literature",
        "Pre-Calculus",
        "Physics",
        "Government/Economics",
        "AP Elective",
        "College Prep Elective",
      ],
    },
  ];

  return (
    <Container>
      <ContentWrapper>
        <InfoSection>
          <Title>
            Your Learning <br /> path
          </Title>
          <Description>
            Build your dream personal learning pathway by choosing the right
            high school courses to create multi year course progression roadmap.
            Set yourself on road to unparalleled success
          </Description>
        </InfoSection>
        <CourseSection>
          {grades.map((gradeData, index) => (
            <CourseCard key={index} {...gradeData} />
          ))}
        </CourseSection>
      </ContentWrapper>
    </Container>
  );
};

const CourseCard = ({ grade, track, courses }) => {
  return (
    <CardWrapper>
      <CardContent>
        <GradeInfo>
          <GradeIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9f4f093e80594264eae8b95486ee7fc54edd3ac8dd194f7af65926cbacb803?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" alt="Grade icon" />
          <GradeText>{grade}</GradeText>
        </GradeInfo>
        <TrackInfo>{track}</TrackInfo>
        <Divider />
        <CourseList>
          {courses.map((course, index) => (
            <CourseItem key={index}>{course}</CourseItem>
          ))}
        </CourseList>
      </CardContent>
    </CardWrapper>
  );
};

const Container = styled.main`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 991px) {
    padding: 20px;
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  color: #31225c;
  width: 40%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font: 700 48px/1.2 "Google Sans", sans-serif;
  margin: 0 0 24px;
`;

const Description = styled.p`
  font: 400 18px/1.5 "Google Sans", sans-serif;
  margin: 0;
`;

const CourseSection = styled.section`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media (max-width: 991px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

const CardWrapper = styled.article`
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #603ac8;
  overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const GradeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const GradeIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const GradeText = styled.span`
  font: 700 24px "Google Sans", sans-serif;
  color: #603ac8;
`;

const TrackInfo = styled.p`
  color: #8f8f8f;
  font: 500 18px "Google Sans", sans-serif;
  margin: 0 0 16px;
`;

const Divider = styled.hr`
  background-color: #e9e3e3;
  height: 1px;
  border: none;
  margin: 0 0 16px;
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CourseItem = styled.li`
  font: 400 16px "Google Sans", sans-serif;
  color: #212121;
  background-color: #fff;
  padding: 8px 12px;
  border: 1px solid #603ac8;
  border-radius: 4px;
`;

export default GradeCards;