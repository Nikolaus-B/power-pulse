import React from 'react';
//import { Header } from 'components/Header/Header';
import { NavLink } from 'react-router-dom';
import { 
  Container, 
  HeroTitle, 
  CTAButton, 
  VideoTutorialSection, 
  VideoTutorialButton, 
  CaloriesTrackerSection, 
  CaloriesInfo, 
  CaloriesIcon, 
  CaloriesText,
  Text,
  Section, 
  VideoIcon, 
  Video,
  // UserImage, 
  SectionVideo,
  SignInButton,
  FotoSection
} from '../components/HomePage/HomePage.styled'; 
import img from '../img/hero-mobile-1x.jpg';

const HomePage = () => {
  return (
    <>
      
      <Container>
        <Section>
          <HeroTitle>Transforming your body shape with Power Pulse</HeroTitle>
          <div className="cta-buttons">
            <NavLink to="/register"><CTAButton>Sign Up</CTAButton></NavLink>
            <NavLink to="/login"><SignInButton>Sign In</SignInButton></NavLink>
          </div>
        </Section>
        
        <FotoSection>
          <img src={img} alt="Woman exercising" />

          <VideoTutorialSection>
            <VideoIcon>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#EF8964" />
              </svg>
            </ VideoIcon >
            <SectionVideo>
              <Video>350+</Video>
              <VideoTutorialButton>Video tutorial</VideoTutorialButton>
            </SectionVideo>
          </VideoTutorialSection>

          <CaloriesTrackerSection>
            <CaloriesIcon>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#EFA082" />
              </svg>
            </CaloriesIcon>
            <CaloriesInfo>
              <CaloriesText>500</CaloriesText>
              <Text>cal</Text>
           </CaloriesInfo>
         </CaloriesTrackerSection>
      </FotoSection>
        
      </Container>
    </>
  );
}

export default HomePage;
