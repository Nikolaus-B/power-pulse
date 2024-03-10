import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hero1x from '../../img/hero-404-1x.jpg';
import hero2x from '../../img/hero-404-2x.jpg';
import heromob1 from '../../img/hero-mob404-1x.jpg';
import heromob2 from '../../img/hero-mob404-2x.jpg';
import herotab1 from '../../img/hero-tablet404-1x.jpg';
import herotab2 from '../../img/hero-tablet404-2x.jpg';

export const Section = styled.div`
 position: relative;
  background-image: url(${heromob1});
  background-image: -webkit-image-set(
    url(${heromob1}); 1x,
    url(${heromob2}); 2x
  );
  color: #efede8;
  background-repeat: no-repeat;
  background-position: bottom 0 right -40%;
  margin: 0 auto;
  position: relative;
  height: 100vh;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    background-color: rgba(0, 0, 0, 1);

    background-image: url(${herotab1});
    background-image: -webkit-image-set(
     url(${herotab1}); 1x,
     url(${herotab2}); 2x
    );
    background-position: bottom 0 right 0%;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 800px;

    background-image: url(${hero1x}); 771px;
    background-image: -webkit-image-set(
      url(${hero1x}); 1x,
      url(${hero2x}); 2x
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
export const Body = styled.div`
  background-color: black;
`;
