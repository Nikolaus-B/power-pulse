import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hero1x from '../../img/hero-404-1x.jpg';
import hero2x from '../../img/hero-404-2x.jpg';
import heromob1 from '../../img/hero-mob404-1x.jpg';
import heromob2 from '../../img/hero-mob404-2x.jpg';
import herotab1 from '../../img/hero-tablet404-1x.jpg';
import herotab2 from '../../img/hero-tablet404-2x.jpg';

export const Photo = styled.div`
  background-image: url(${heromob1});
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 135px;
  height: 560px;
  top: 250px;
  left: 240px;
  z-index: 1;

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
      url(${heromob2});
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 348px;
    height: 893px;
    top: 131px;
    left: 420px;

    background-image: url(${herotab1});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${herotab2});
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    width: 670px;
    height: 800px;
    top: 0;
    left: 770px;
    background-image: url(${hero1x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${hero2x});
    }
  }
`;
export const Section = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  color: #e6533c;
  height: 100vh;
  background-color: black;
  width: 100%;
`;

export const ErrorBox = styled.div`
  position: absolute;
  width: 240px;
  height: 100%;
  background: #e6533c;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 32px 32px;

    width: 420px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 32px 96px;
  }
`;

export const BoxContent = styled.div`
  margin-top: 226px;
  margin-bottom: auto;

  @media screen and (min-width: 768px) {
    margin-top: 309px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 221px;
  }
`;

export const Title404 = styled.h1`
  font-size: 66px;
  color: #efede8;
  margin: 0;
  line-height: 1;
  letter-spacing: 0.01em;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 0.94;
  }
`;

export const Text404 = styled.p`
  width: 200px;
  color: #efede8;
  font-size: 14px;
  margin: 14px 0 28px 0;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    margin-top: 28px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  left: 24px;
  top: 20px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    top: 32px;
    left: 32px;
  }

  @media screen and (min-width: 1440px) {
    left: 96px;
  }
`;

export const Svg = styled.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color2, #e6533c);
  width: 147px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: var(--color1, #efede8);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
export const Test = styled.div`
  position: absolute;
`;
