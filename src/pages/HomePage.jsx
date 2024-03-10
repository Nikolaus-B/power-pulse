import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  ContainerForm,
  HeroTitle,
  CTAButton,
  SignInButton,
  IconPlays,
  IconsSVG,
  Video,
  TextTutorial,
  CaloriesMe,
  IconMan,
  CaloriesInfo,
  CaloriesText,
  SpanText,
  VideoIcon,
  SectionVideo,
  CaloriesIcon,
  Photo,
} from '../components/HomePage/HomePage.styled';
import sprite from '../img/sprite.svg';

const HomePage = () => {
  return (
    <Container className="container">
      <Photo />
      <ContainerForm>
        <HeroTitle>Transforming your body shape with Power Pulse</HeroTitle>
        <div className="cta-buttons">
           <NavLink to="/register"><CTAButton>Sign Up</CTAButton></NavLink>
           <NavLink to="/login"><SignInButton>Sign In</SignInButton></NavLink>
        </div>
      </ContainerForm>

      <IconPlays>
        <VideoIcon>
          <IconsSVG>
            <use href={`${sprite}#icon-Polygon-1`}></use>
          </IconsSVG>
        </VideoIcon>

        <SectionVideo>
          <Video>
            350+<TextTutorial>Video tutorial</TextTutorial>
          </Video>
        </SectionVideo>
      </IconPlays>
      <CaloriesMe>
        <IconMan>
          <CaloriesIcon>
            <use href={`${sprite}#icon-Group`}></use>
          </CaloriesIcon>
        </IconMan>
        <CaloriesInfo>
          <CaloriesText>500</CaloriesText>
          <SpanText>cal</SpanText>
        </CaloriesInfo>
      </CaloriesMe>
    </Container>
  );
};

export default HomePage;
