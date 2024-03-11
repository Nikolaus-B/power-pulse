import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import Desk1x from '../../img/hero-1x.jpg';
// import Desk2x from '../../img/hero-2x.jpg';
// import Tab1x from '../../img/hero-tablet-1x.jpg';
// import Tab2x from '../../img/hero-tablet-2x.jpg';
// import Mob1x from '../../img/hero-mobile-1.jpg';
// import Mob2x from '../../img/hero-mobile-2x.jpg';

export const Container = styled.div`
  padding-top: 66px;
  padding-bottom: 0px;
  font-family: 'Roboto', sans-serif;
  position: relative;

  @media screen and (min-width: 768px) {
    padding-top: 105px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 178px;
    padding-right: 32px;
    padding-top: 116px;
  }
`;


export const ContainerForm = styled.div`
  width: 100%;
  /* max-width: 335px; */
  min-width: 335px;
  margin: 0;

  @media screen and (min-width: 768px) {
    max-width: 598px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-family);
font-weight: 500;
font-size: 38px;
line-height: 105%;
letter-spacing: 0.01em;
color: var(--white-color);
margin-bottom: 40px;
margin-top: 27px;
position: relative; 
  z-index: 1;
  @media screen and (min-width: 768px) {
font-size: 70px;
line-height: 111%;
margin-bottom: 64px;
margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
margin-top: 43px;
  }
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    
  }
`;

export const TextLinkIn = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  padding-top: 12px;

  color: rgba(239, 237, 232, 0.6);

  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  text-decoration: underline;
  display: inline-block;
  color: #ffff;
`;



// /////////////
export const CTAButton = styled.button`
  border: 1px solid var(--orange-color);
  border-radius: 12px;
  width: 136px;
  height: 42px;
  color: var(--white-color);
  margin-right: 14px;
  background-color: var(--orange-color);
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  &:hover {
    background-color: var(--orange_1-color);
    border: 1px solid var(--orange_1-color);
  }

  &:focus {
    background-color: var(--orange_1-color);
    border: 1px solid var(--orange_1-color);
  }

  @media screen and (min-width: 768px) {
width: 190px;
height: 56px;
  }

`;

export const SignInButton = styled.button`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 136px;
  height: 42px;
  color: var(--white-color);
  background-color: var(--primary-black-color);

  &:hover {
    border: 1px solid var(--orange_1-color);
  }

  &:focus {
    border: 1px solid var(--orange_1-color);
  }

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 56px;
  }
  @media screen and (min-width: 1440px) {
    width: 182px;
    height: 56px;
  }

`;

// line

export const Line = styled.svg`
stroke-width: 2px;
  position: absolute; 
  top: 110px;
  left: 11px;
  z-index: 0; 
  width: 98px; 
  height: 35px; 
  fill: transparent;
  
  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px; 
    top: 189px;
  left: 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 201px;
  left: 80px;
  }
`;