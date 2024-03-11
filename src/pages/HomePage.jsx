import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  ContainerForm,
  HeroTitle,
  CTAButton,
  SignInButton,
  Line,
} from '../components/HomePage/HomePage.styled';
import sprite from '../img/pulse-icons.svg';
import {
  Photo,
  IconPlay,
  Icon,
  SvgPlay,
  Block,
  Tutorial,
  TextTutorial,
  Calories,
  IconMan,
  IconManSvg,
  SectionMan,
  TitleMan,
  SpanMan,
} from '../components/AuthLayout/AuthLayout.styled';
const HomePage = () => {
  return (
    <Container className="container">
      <Photo />
      <ContainerForm>
        <HeroTitle>Transforming your body shape with Power Pulse</HeroTitle>
        <Line stroke="#EF8964">
          <use href={`${sprite}#line`}></use>
        </Line>
        <div className="cta-buttons">
          <NavLink to="/register">
            <CTAButton>Sign Up</CTAButton>
          </NavLink>
          <NavLink to="/login">
            <SignInButton>Sign In</SignInButton>
          </NavLink>
        </div>
      </ContainerForm>
      <IconPlay>
        <Icon>
          <SvgPlay>
            <use href={`${sprite}#icon-Polygon-1`}></use>
          </SvgPlay>
        </Icon>

        <Block>
          <Tutorial>
            350+<TextTutorial>Video tutorial</TextTutorial>
          </Tutorial>
        </Block>
      </IconPlay>
      <Calories>
        <IconMan>
          <IconManSvg>
            <use href={`${sprite}#icon-Group`}></use>
          </IconManSvg>
        </IconMan>
        <SectionMan>
          <TitleMan>500</TitleMan>
          <SpanMan>cal</SpanMan>
        </SectionMan>
      </Calories>
    </Container>
  );
};

export default HomePage;
