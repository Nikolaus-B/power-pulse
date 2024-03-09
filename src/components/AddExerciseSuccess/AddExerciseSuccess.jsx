import {
  Wrapper,
  ImageEl,
  DiaryLink,
  Heading,
  Calories,
  ProductButton,
  WrapperDiaryLink,
  ExerciseTime,
  WrapperCloseIcon,
  Span, IconClose, ArrowForwardIcon
} from './ExerciseSuccess.styled';

import imgHead from '../../img/like-1x.png'

export const AddExerciseSuccess = ({
  onClose,
  caloriesAdded,
  remainingTime
}) => {

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    // const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}. ${formattedSeconds} second`;
  };

  return (
    <>
        <WrapperCloseIcon onClick={onClose}>
          <IconClose iconid='x-white' width={22} height={22}/>
        </WrapperCloseIcon>

        <Wrapper>
          <ImageEl src={imgHead} alt="Success"  />
          <Heading>Well done</Heading>

          <ExerciseTime>
          Your time:<Span>{formatTime(Math.floor(remainingTime))}</Span>
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
    </>
  );
};
