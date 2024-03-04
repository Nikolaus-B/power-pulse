import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import Desk1x from '../../img/hero-1x.jpg';
// import Desk2x from '../../img/hero-2x.jpg';
// import Tab1x from '../../img/hero-tablet-1x.jpg';
// import Tab2x from '../../img/hero-tablet-2x.jpg';
// import Mob1x from '../../img/hero-mobile-1x.jpg';
// import Mob2x from '../../img/hero-mobile-2x.jpg';

export const ContainerDiv = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    padding-left: 96px;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 335px;
  margin: 0;
  padding-top: 90px;

  @media screen and (min-width: 768px) {
    max-width: 496px;
    padding-top: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 151px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;

  text-align: left;
  color: #efede8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  text-align: left;
  margin-bottom: 19px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 23px;
  }
`;

export const TextLinkIn = styled.p`
  font-size: 12px;
  line-height: 1.33;

  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 1.33;
  text-decoration: underline;
  display: inline-block;
  color: #ffff;
`;

export const Material = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 420px;
    bottom: 48px;
    right: 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 690px;
    bottom: 171px;
    right: 0;
  }
`;

export const IconPlay = styled.div`
  display: flex;
  align-items: center;
  width: 146px;
  height: 66px;
  background-color: #303030;
  border-radius: 12px;
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;
    margin-bottom: 56px;
    margin-right: auto;
  }
`;
export const SvgPlay = styled.svg`
   fill: #EFEDE8;
    background-color: #EF8964;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-left: 18px;
    margin-right: 8px;

    @media screen and (min-width: 768px) {
        width: 40px;
        height: 40px;
        margin-left: 23px;
    }
  }
  }
`;
export const Tutorial = styled.h3`
  display: flex;
  flex-direction: column;
  }
`;

export const TextTutorial = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.65);

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
    }
  }
`;

export const Calories = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 119px;
    height: 76px;
    background-color: #EF8964;
    border-radius: 12px;
    margin-left: auto;
    margin-right: 20px;

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 110px;
      margin-right: 32px;
    }
 }
`;

export const IconMan = styled.div`
    fill: #EFEDE8;
    background-color: #EFA082;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    top: 18px;
    left: 22px;
    padding: 5px;
    margin: 0px 0px 0px 22px;
   

    @media screen and (min-width: 768px) {
        width: 20px;
        height: 20px;
    }
 }
`;

export const SectionMan = styled.div`
    margin-left: 18px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
 }
`;
export const TitleMan = styled.p`
     color: #EFEDE8;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -1px;
    text-align: left;
    margin-top: 4px;
    margin-right: 8px;

     @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 50px;
        margin-right: 11px;
    }
  }
`;

export const SpanMan = styled.p`
    font-weight: 700;
    font-size: 12px;
  }
`;
