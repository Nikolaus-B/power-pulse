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
  background-image: url(${heroMobile1});
  background-image: -webkit-image-set(
    url(${heroMobile1}); 1x,
    url(${heroMobile2}); 2x
  );
  color: #efede8;
  background-repeat: no-repeat;
  background-position: bottom 0 right -40%;
  margin: 0 auto;
  height: 100vh;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    background-color: rgba(0, 0, 0, 1);

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
    background-image: -webkit-image-set(
      url(${hero1}); 1x,
      url(${hero2}); 2x
    );
  }
`;

export const Left = styled.div`
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

export const Content = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

export const Title404 = styled.h1`
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: calc(150 / 160);
    letter-spacing: 1.6px;
  }
`;

export const Text404 = styled.p`
  width: 200px;
  font-size: 14px;
  margin-top: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    margin-top: 28px;
    line-height: calc(24 / 16);
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
  background-color: #e6533c;
  width: 147px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding: 12px, 40px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 56px;
    padding: 12px, 60px;
    font-size: 20px;
    line-height: 24px;
  }
`;
