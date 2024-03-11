 import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Desk1x from '../../img/hero-1x.jpg';
import Desk2x from '../../img/hero-2x.jpg';
import Tab1x from '../../img/hero-tablet-1x.jpg';
import Tab2x from '../../img/hero-tablet-2x.jpg';
import Mob1x from '../../img/hero-mobile-1.jpg';
import Mob2x from '../../img/hero-mobile-2x.jpg';

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
export const Photo = styled.div`
  background-image: url(${Mob1x});
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 298px;
  height: 571px;
  top: 180px;
  left: 77px;
  z-index: -1;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        168deg,
        #040404 14.75%,
        rgba(4, 4, 4, 0) 52.97%
      ),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${Mob2x});
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    /* width: 423px;
    height: 893px; */
    width: 437px;
    height: 893px;
    top: 47px;
    left: 331px;

    background-image: url(${Tab1x});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Tab2x});
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    width: 670px;
    height: 800px;
    top: -84px;
    left: 770px;
    background-image: url(${Desk1x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Desk2x});
    }
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
position: relative; /* Додаємо позиціонування */
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

export const IconPlays = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 66px;
  background-color: #303030;
  border-radius: 12px;
  position: absolute;
  top: 499px;
  left: 121px;

  @media screen and (min-width: 768px) {
    top: 630px;
    left: 331px;
    width: 206px;
    height: 96px;
    padding: 20px 23px;
  }

  @media screen and (min-width: 1440px) {
    top: 300px;
    left: 770px;
  }
`;

export const IconsSVG = styled.svg`
  width: 12px;
  height: 12px;
  color: #efede8;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Video = styled.h3`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const TextTutorial = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0px;
  text-align: left;
  padding-top: 4px;

  color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    padding-top: 8px;
  }
`;

export const CaloriesMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 119px;
  height: 76px;
  border-radius: 12px;
  background-color: #ef8964;
  padding: 14px 18px;
  position: absolute;
  top: 635px;
  left: 236px;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    top: 782px;
    left: 556px;
  }

  @media screen and (min-width: 1440px) {
    top: 435px;
    left: 1228px;
  }
`;

export const IconMan = styled.div`
  background-color: #efa082;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const CaloriesIcon = styled.svg`
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const CaloriesInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    justify-content: normal;
    gap: 11px;
  }
`;
export const CaloriesText = styled.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.04;
  }
`;

export const SpanText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const VideoIcon = styled.div`
  fill: #efede8;
  background-color: #ef8964;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;
export const SectionVideo = styled.div``;

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