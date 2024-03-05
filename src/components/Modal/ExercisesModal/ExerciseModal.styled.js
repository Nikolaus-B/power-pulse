import styled from 'styled-components';

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

const Wrapper = styled.div`
  padding: 48px 17px 48px 16px;
  max-width: 335px;
  /* height: 788px; */
`;

const ImageExercise = styled.img`
  width: 270px;
  height: 226px;
  border-radius: 12px;
  margin: auto;
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

const PauseButton = styled.button`
  background-color: rgba(230, 83, 60, 1);
  fill: white;
  padding: 8px 8.67px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-top: 18px;
  margin-bottom: 12px;
`;

const BurnedCalories = styled.p`
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  line-height: 1.28;
  margin-bottom: 40px;

  span {
    color: rgba(230, 83, 60, 1);
  }
`;

const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 8px;
  column-gap: 8px;
  margin-bottom: 24px;

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
`;

const AddToDiaryButton = styled.button`
  /* width: 151px;3 */
  height: 42px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.28;
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);
  padding: 12px 32px;
  color: #EFEDE8;
`;

export {
  customStyles,
  Wrapper,
  ImageExercise,
  Timetext,
  WrapperTimer,
  PauseButton,
  BurnedCalories,
  InfoList,
  InfoItem,
  AddToDiaryButton
};
