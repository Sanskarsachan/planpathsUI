import React from "react";
import styled from "styled-components";

const CourseSelectionInfo = () => {
  return (
    <Container className="course-selection-info">
      <Title>Your choices + Social feedback</Title>
      <Description>
        Course selection are complex, challenging, and overwhelming.
        <br />
        Planpaths bring together the Art & the science of your Course choices with power of Social feedback.
      </Description>
    </Container>
  );
};

export default CourseSelectionInfo;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 32px 80px 50px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  color: #603ac8;
  margin: 0 35px;
  font: 700 36px Google Sans, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    font-size: 28px;
  }
`;

const Description = styled.p`
  color: #31225c;
  margin: 26px 35px 0;
  font: 500 16px Google Sans, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    font-size: 14px;
  }
`;