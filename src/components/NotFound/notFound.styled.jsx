import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hero1x from '../../img/hero-404-1x.jpg';
import hero2x from '../../img/hero-404-2x.jpg';
import heromob1 from '../../img/hero-mob404-1x.jpg';
import heromob2 from '../../img/hero-mob404-2x.jpg';
import herotab1 from '../../img/hero-tablet404-1x.jpg';
import herotab2 from '../../img/hero-tablet-2x.jpg';

export const Photo = styled.img`
  background-image: url(${heromob1});
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 135px;
  height: 560px;
  top: 189px;
  left: 250px;
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
    width: 423px;
    height: 893px;
    top: 47px;
    left: 345px;

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
    top: -84px;
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
  position: relative;
  color: #e6533c;
  height: 100vh;
  background-color: black;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 800px;
  }
`;

export const ErrorBox = styled.div`
  position: absolute;
  width: 240px;
  max-height: 812px;
  background: #e6533c;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 32px 32px;
    max-height: 1024px;
    width: 420px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 32px 96px;
  }
`;

export const BoxContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

export const Title404 = styled.h1`
  font-size: 66px;
  line-height: 66px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 150px;
  }
`;

export const Text404 = styled.p`
  width: 200px;
  color: #efede8;
  font-size: 14px;
  margin-top: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    margin-top: 28px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  left: 32px;
  top: 32px;
  z-index: 2;

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
  line-height: 18px;
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
    line-height: 24px;
  }
`;
