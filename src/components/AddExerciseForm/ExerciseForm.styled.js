import styled from 'styled-components';

const IconWrapper = styled.div`
cursor: pointer;
margin-top: 14px;
margin-bottom: 8px;
  transition: transform 0.2s;

  &:hover{
transform: scale(1.02);
}
svg {
width: 32px;
height: 32px;
}

`

const TimerInfoWrapper = styled.div`

`

const Wrapper = styled.div`
  padding: 48px 17px 48px 16px;
  max-width: 335px;
  height: 788px;
  position: relative;

  @media screen and (min-width: 768px) {
display: flex ;
align-items: flex-start;
max-width: 694px;
max-height: 550px;
padding: 48px 31px 48px 32px;
  }
`;

const ImageExercise = styled.img`
  width: 270px;
  height: 226px;
  border-radius: 12px;
  margin: auto;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
    margin: 0;
    min-width: 270px;
  }
`;

const Timetext = styled.p`
  font-size: 10px;
  color: rgba(239, 237, 232, 0.4);
  margin-top: 14px;
  margin-bottom: 4px;
`;

const WrapperTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;



const BurnedCalories = styled.p`
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  line-height: 1.28;
  margin-bottom: 40px;

  span {
    color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const InfoListWrapper = styled.div`
`

const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 8px;
  column-gap: 8px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
justify-content: end;
margin-bottom: 0;
  }

`;

const InfoItem = styled.li`
  width: 147px;
  padding-left: 18px;
  padding-right: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid;
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.2);



  p{
    font-size: 12px;
    line-height: 1.33;
color: rgba(239, 237, 232, 0.4);
text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }

  p:last-child {
    font-size: 14px;
    color: #EFEDE8;
    line-height: 1.28;
    margin-top: 4px;

  }

  p::first-letter {
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
width: 169px;
  }
`;

const AddToDiaryButton = styled.button`
  height: 42px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.28;
  border-radius: 12px;
  border: none;
  background-color: rgba(230, 83, 60, 1);
  padding: 12px 32px;
  color: #EFEDE8;
  transition: transform 0.2s;

  &:hover{
transform: scale(1.02);
}

  @media screen and (min-width: 768px) {
position: absolute;
bottom: 48px;
right: 32px;
padding: 14px 32px;
width: 151px;
height: 52px;
  }
`;

const WrapperCloseIcon = styled.div`
position: fixed;
top: 18px;
right: 18px;
cursor: pointer;
display: none;

@media screen and (min-width: 768px) {
display: block;
  }
`

export {
 IconWrapper,
  Wrapper,
  ImageExercise,
  Timetext,
  WrapperTimer,
  BurnedCalories,
  InfoList,
  InfoItem,
  AddToDiaryButton,
  TimerInfoWrapper,
  InfoListWrapper,
  WrapperCloseIcon
};
