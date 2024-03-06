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
  FotoSection,
  // SectionMan
  IconSVG,
  IconsSVG,
  // Foto
} from '../components/HomePage/HomePage.styled'; 
// import img from '../img/hero-mobile-1x.jpg';
import sprite from '../img/sprite.svg';

const HomePage = ({
  title,
  paragraph,
  bottomText,
  linkName,
  linkUrl,
  children,
}) => {
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
        

         
        {/* <img src={img} alt="Woman exercising" />  */}
        <FotoSection>
        <VideoTutorialSection>
        <VideoIcon>
          <IconsSVG>
            <use href={`${sprite}#icon-Polygon-1`}></use>
          </IconsSVG>
        </VideoIcon>

        <SectionVideo>
          <Video>
            350+<VideoTutorialButton>Video tutorial</VideoTutorialButton>
          </Video>
        </SectionVideo>
      </VideoTutorialSection>

        <CaloriesTrackerSection>
        <CaloriesIcon>
          <IconSVG>
            <use href={`${sprite}#icon-Group`}></use>
          </IconSVG>
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
