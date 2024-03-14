import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Icon/Icon';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    borderRadius: '12px',
    borderColor: 'rgba(239, 237, 232, 0.2)',
    backgroundColor: 'rgba(16, 16, 15, 1)',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.707)',
    zIndex: 1001,
  },
};


const WrapperCloseIcon  = styled.div`
position: fixed;
top: 18px;
right: 18px;
cursor: pointer;

@media screen and (min-width: 768px) {
    svg {
      width: 26px;
      height: 26px;
    }
  }
`

const Wrapper = styled.div`
  padding: 48px 89px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 64px 134px;
    height: 439px; }
`;

const ImageEl = styled.img`
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

const ExerciseTime = styled.div`
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 4px;
`

const Span = styled.span`
    color: #E6533C;
    margin-left: 8px;
    line-height: 1.28;
`


const Calories = styled.p`
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;


  span {
    color: #E6533C;
    margin-left: 8px;
    line-height: 1.28;

  }

  @media screen and (min-width: 768px) {
margin-bottom: 32px;
  }
`;

const ProductButton = styled.button`
  color: #EFEDE8;
  line-height: 1.12;
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  height: 42px;

  @media screen and (min-width: 768px) {
padding: 14px 32px;
width: 162px;
height: 52px;
  }
`;

const WrapperDiaryLink = styled(Link)`
display: flex;
align-items : center ;
text-decoration: none;
cursor: pointer;
`
const DiaryLink = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
`;

const IconClose = styled(Icon)`

`

export { Wrapper, DiaryLink, ImageEl, Heading, Calories, ProductButton  ,customStyles , WrapperDiaryLink ,ExerciseTime , WrapperCloseIcon, Span , IconClose};