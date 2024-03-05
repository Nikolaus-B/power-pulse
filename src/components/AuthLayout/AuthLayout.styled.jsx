import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import Desk1x from '../../img/hero-1x.jpg';
// import Desk2x from '../../img/hero-2x.jpg';
// import Tab1x from '../../img/hero-tablet-1x.jpg';
// import Tab2x from '../../img/hero-tablet-2x.jpg';
// import Mob1x from '../../img/hero-mobile-1x.jpg';
// import Mob2x from '../../img/hero-mobile-2x.jpg';

export const Container = styled.div`
  padding-top: 66px;
  padding-bottom: 0px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 178px;
    padding-right: 32px;
  }
}
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 335px;
  margin: 0;
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    max-width: 496px;
    padding-top: 105px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 116px;
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
    line-height: 1.38;
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
    margin-bottom: 32px;
  }
`;

export const TextLinkIn = styled.p`
  font-size: 12px;
  line-height: 1.33;
  padding-top: 12px;

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 405px;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 638px;
    padding-top: 300px;
    justify-content: normal;
  }
`;

export const IconPlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    padding: 20px 23px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom:39px;
  }
  }
`;

export const SvgPlay = styled.svg`
  width:12px;
  height:12px;
  color: #EFEDE8;
  @media screen and (min-width: 768px) {
    width:20px;
    height:20px;
        
    }
}
`;

export const Tutorial = styled.h3`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.12;
   @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 1;
        
    }
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
  }
`;

export const Calories = styled.div`
    display: flex;
    flex-direction: column;
    gap:4px;
    width: 119px;
    height: 76px;
    background-color: #EF8964;
    border-radius: 12px;
    margin-left: auto;
    
    padding: 14px 18px;

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 110px;
      
    }
 }
`;

export const IconMan = styled.div`
    
    background-color: #EFA082;
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
 }
`;
export const IconManSvg = styled.svg`
    width:12px;
    height:12px;
     @media screen and (min-width: 768px) {
        width: 16px;
        height: 16px;
    }
 }
`;

export const SectionMan = styled.div`
    
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      justify-content: normal;
      gap: 11px;
    }
 }
`;
export const TitleMan = styled.p`
     color: #EFEDE8;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -1px;
    

     @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 1.04;
        
    }
  }
`;

export const SpanMan = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    color: rgba(239, 237, 232, 0.65);
  
  @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
        }
      }
  
`;

export const Icon = styled.div`
   fill: #EFEDE8;
    background-color: #EF8964;
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
  }
  }
`;
export const Block = styled.div`
   
  }
`;
