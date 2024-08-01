import React from 'react';
import '../src/app/globals.css';
// import styled from "styled-components";
import CourseSelectionHero from "../src/app/components/homepage/CourseSelection";
import LearningPathSection from '../src/app/components/homepage/LearningPath';

export default function Home() {
  return (
    <div>
      <CourseSelectionHero/>
      <LearningPathSection/>
    </div>
  );
}
