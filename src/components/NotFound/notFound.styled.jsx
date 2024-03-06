import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroMobile1 from '../../img/hero-mobile-1x.jpg';
import heroMobile2 from '../../img/hero-mobile-2x.jpg';
import heroTablet1 from '../../img/hero-tablet-1x.jpg';
import heroTablet2 from '../../img/hero-tablet-2x.jpg';
import hero1 from '../../img/hero-1x.jpg';
import hero2 from '../../img/hero-2x.jpg';

export const Container = styled.div`
 position: relative;
 background-color: black;
  background-image: url(${heroMobile1});
  background-image: -webkit-image-set(
    url(${heroMobile1}); 1x,
    url(${heroMobile2}); 2x
  );
  color: var(--color2, #e6533c);
  background-repeat: no-repeat;
  background-position: bottom 0 right -40%;
  margin: 0 auto;
  height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    background-color: black;

    background-image: url(${heroTablet1});
    background-image: -webkit-image-set(
     url(${heroTablet1}); 1x,
     url(${heroTablet2}); 2x
    );
    background-position: bottom 0 right 0%;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 800px;
    background-image: url(${hero1}); 771px;
    background-image: url(${hero1}); 771px;
    background-image: -webkit-image-set(
      url(${hero1}); 1x,
      url(${hero2}); 2x
    );
  }
`;

export const ErrorBox = styled.div`
  background: #e6533c;
  max-width: calc(64%);
  height: 100%;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 420px;
    padding: 32px 32px;
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
  color: var(--color1, #efede8);

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 150px;
  }
`;

export const Text404 = styled.p`
  width: 200px;
  color: var(--color1, #efede8);
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
