import Modal from 'react-modal';
import {
  Wrapper,
  ImageEl,
  DiaryLink,
  Heading,
  Calories,
  ProductButton,
  customStyles,
  WrapperDiaryLink,
  ExerciseTime,
  WrapperCloseIcon,
  Span, IconClose, ArrowForwardIcon
} from './ExerciseSuccess.styled';

import { BasicModalWindow } from './customStylesModal';
import imgHead from '../../img/like-1x.png'
import { Icon } from 'components/Icon/Icon';

export const AddExerciseSuccess = ({
  isSuccessOpen,
  onClose,
  caloriesAdded,
  remainingTime
}) => {

  // const formatTime = (time) => {
  //   return time < 10 ? `${time}` : 0`${time}`;
  // };

  // const children = () => {
  //   const minutes = Math.floor(remainingTime / 60);
  //   const seconds = remainingTime % 60;
  //   return `${formatTime(minutes)} minutes ${formatTime(seconds)} second`;
  // };
  

  return (
    <>
      <BasicModalWindow
        isOpen={isSuccessOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Add Product Modal"
      >
        <WrapperCloseIcon onClick={onClose}>
          <IconClose iconid='x-white' width={22} height={22}/>
        </WrapperCloseIcon>

        <Wrapper>
          <ImageEl src={imgHead} alt="Success"  />
          <Heading>Well done</Heading>

          <ExerciseTime>
          Your time:<Span>{remainingTime}</Span>
          </ExerciseTime>
          <Calories>
            Burned calories:<span>{caloriesAdded}</span>
          </Calories>
          <ProductButton onClick={onClose}>Next product</ProductButton>
          <WrapperDiaryLink to="/diary">
            <DiaryLink>To the diary </DiaryLink>
            <div>
              <ArrowForwardIcon iconid='arrow' width={16} height={16}/>
            </div>
          </WrapperDiaryLink>
        </Wrapper>
      </BasicModalWindow>
    </>
  );
};
