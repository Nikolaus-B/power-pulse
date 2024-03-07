import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Wrapper = styled.div`
  padding: 48px 89px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1439px)  {
padding: 64px 136px 64px 137px;
  }
`;

const WrapperCloseIcon  = styled.div`
position: fixed;
top: 18px;
right: 18px;
cursor: pointer;
`

const ImageEl = styled.img`
  margin-bottom: 16px;
  width: 123px;
  height: 84px;

  @media screen and (min-width: 768px) and (max-width: 1439px)  {
margin-bottom: 32px;
  }
`;
const Heading = styled.h3`
  font-size: 24px;
  line-height: 1.33;
  margin-bottom: 16px;
`;

const Calories = styled.p`
  font-size: 14px;
  line-height: 1.28;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;

  span {
    color: rgba(230, 83, 60, 1);
  }

  @media screen and (min-width: 768px) and (max-width: 1439px)  {
margin-bottom: 32px;
  }
`;

const ProductButton = styled.button`
  display: block;
  border: none;
  width: 157px;
  height: 42px;

  color: #EFEDE8;
  font-size: 16px;
  line-height: 1.12;
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);
  padding: 12px 32px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) and (max-width: 1439px)  {
width: 157px;
height: 52px;
  }
`;

const WrapperDiaryLink = styled(Link)`
display: flex;
align-items : center ;
text-decoration: none;
cursor: pointer;
`

const DiaryLink = styled.div`
  color: rgba(239, 237, 232, 0.3);
  text-decoration: none;
  /* margin-right: 8px; */
  font-size: 14px;
  line-height: 1.28;
`;


export { Wrapper, DiaryLink, ImageEl, Heading, Calories, ProductButton , WrapperCloseIcon , WrapperDiaryLink };
