import styled from 'styled-components';
import Desk1x from '../../img/hero-1x.jpg';
import Desk2x from '../../img/hero-2x.jpg';
import Tab1x from '../../img/hero-tablet-1x.jpg';
import Tab2x from '../../img/hero-tablet-2x.jpg';
import Mob1x from '../../img/hero-mobile-1.jpg';
import Mob2x from '../../img/hero-mobile-2x.jpg';

export const HeroTitle = styled.h1`
  width: 335px;
  height: 120px;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 38px;
  line-height: 105%;
  letter-spacing: 0.01em;
  color: var(--white);

  @media screen and (min-width: 768px) {
    width: 598px;
    height: 234px;
    font-size: 70px;
    line-height: 111%;
  }

  @media screen and (min-width: 1440px) {
    width: 598px;
  height: 234px;
  }
 
`;

export const Line = styled.svg`
stroke-width: 2px;
  position: absolute; 
  top: 133px;
  left: 11px;
  z-index: 0; 
  width: 98px; 
  height: 35px; 
  fill: transparent;
  
  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px; 
    top: 224px;
  left: 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 235px;
  left: 80px;
  }
`;
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

export const CaloriesInfo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  
  @media screen and (min-width: 768px) {
    justify-content: normal;
    gap: 11px;
  }
`;

export const CaloriesIcon = styled.div`
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

export const IconSVG = styled.svg`
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
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

export const Text = styled.p`
   font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
`;

export const Photo = styled.div`
  background-image: url(${Mob1x});
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 446px;
  height: 669px;
  /* top: 180px;
  left: 77px; */
  top: 241px;
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
    width: 423px;
    height: 1005px;
    /* top: 47px;
    left: 345px; */
    top: 131px;
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
    top: -152px;
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

export const UserImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Section = styled.section`
  padding-top: 90px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  position: relative; 
  z-index: 1;
  @media screen and (min-width: 768px) {
    padding-top: 140px;
  padding-left: 32px;
  padding-right: 76px;
  padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 151px;
  padding-left: 96px;
  padding-right: 138px;
  padding-bottom: 64px;
  }

`;

export const VideoTutorialSection = styled.div`
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


export const IconsSVG = styled.svg`
width: 12px;
  height: 12px;
  color: #efede8;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SectionVideo = styled.div``;

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

export const VideoTutorialButton = styled.p`
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

export const CaloriesTrackerSection = styled.div`
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

export const Actions = styled.div`
  display: flex;
  gap: 14px;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const TutorialText = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: rgba(239, 237, 232, 0.65);
`;

export const StatText = styled.p`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  line-height: 112%;
  color: var(--white);
`;

export const CircleSVG = styled.svg`
  fill: var(--orange-1);
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PromoTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 38px;
  line-height: 105%;
  letter-spacing: 0.01em;
  color: var(--white);
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const FotoSection = styled.div`
  
`;

export const SectionMan = styled.div`
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const FotoContainer = styled.picture`
  width: 446px;
  height: 669px;
`;
export const Foto = styled.img`
  width: 446px;
  height: 669px;
`;

