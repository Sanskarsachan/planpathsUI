import React from 'react';
import '../src/app/globals.css';
// import styled from "styled-components";
import CourseSelectionHero from "../src/app/components/homepage/CourseSelection";
import LearningPathSection from '../src/app/components/homepage/LearningPath';
import GradeCards from '@/app/components/homepage/GradeCards';
import StyledLearningPathway from '@/app/components/homepage/LearningPathway';
import PlanPathsHero from '@/app/components/homepage/HeroPath';
import SocialFeed from '@/app/components/homepage/SocialFeedback';
import Footer from '@/app/components/homepage/Footer';

export default function Home() {
  return (
    <div>
      <CourseSelectionHero/>
      <LearningPathSection/>
      <GradeCards/>
      <StyledLearningPathway/>
      <PlanPathsHero/>
      <SocialFeed/>
      <Footer/>
    </div>
  );
}
