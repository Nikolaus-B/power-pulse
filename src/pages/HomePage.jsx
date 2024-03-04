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
  Section, 
  VideoIcon, 
  UserImage, 
  SignInButton // Додайте імпорт для SignInButton
} from '../components/HomePage/HomePage.styled'; 

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

        
      <UserImage>
        <VideoTutorialSection>
          <VideoTutorialButton>
            <VideoIcon src="play-button.png" alt="Play Video Tutorial" />
            350+ Video tutorial
          </VideoTutorialButton>
        </VideoTutorialSection>

        <CaloriesTrackerSection>
          <CaloriesInfo>
            <CaloriesIcon src="fire-icon.png" alt="Calories Burned" />
            <CaloriesText>500 cal</CaloriesText>
          </CaloriesInfo>
        </CaloriesTrackerSection>

         <img src="../img/hero-mobile-1x.jpg" alt="Woman exercising" />
      </UserImage>
        
      </Container>
    </>
  );
}

export default HomePage;
