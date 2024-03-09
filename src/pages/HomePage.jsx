import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Calories } from '../components/AuthLayout/AuthLayout.styled';
import { 
  Container, 
  HeroTitle, 
  CTAButton, 
  VideoTutorialButton, 
  CaloriesInfo, 
  CaloriesIcon, 
  CaloriesText,
  Text,
  Section, 
  VideoIcon, 
  Video,
  SectionVideo,
  SignInButton,
  FotoSection,
  IconsSVG,
  Photo,
  Line,
  IconPlays,
  CaloriesMe
} from '../components/HomePage/HomePage.styled'; 
import { Icon } from '../components/Icon/Icon';
import sprite from '../img/pulse-icons.svg';
const HomePage = () => {
  return (
    <>
      <Container>
        <Photo />
        <Section>
          <HeroTitle>Transforming your body shape with Power Pulse</HeroTitle>
            <Line stroke='#EF8964'>
              <Icon iconid={'line'}/>
            </Line>
          <div className="cta-buttons">
            <NavLink to="/register"><CTAButton>Sign Up</CTAButton></NavLink>
            <NavLink to="/login"><SignInButton>Sign In</SignInButton></NavLink>
          </div>
        </Section>
        <FotoSection>
        <IconPlays>
            <VideoIcon>
          <IconsSVG>
            <use href={`${sprite}#play-log`}></use>
          </IconsSVG>
        </VideoIcon>
            
        <SectionVideo>
          <Video>
            350+<VideoTutorialButton>Video tutorial</VideoTutorialButton>
          </Video>
        </SectionVideo>
      </IconPlays>
        <CaloriesMe>
        <CaloriesIcon>
          <Icon iconid={'circle-running-man'}/>
        </CaloriesIcon>
        <CaloriesInfo>
          <CaloriesText>500</CaloriesText>
          <Text>cal</Text>
        </CaloriesInfo>
      </CaloriesMe>
        </FotoSection>
      </Container>
    </>
  );
}

export default HomePage;
