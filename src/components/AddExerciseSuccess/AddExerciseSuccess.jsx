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
  Span,
  IconClose,
} from './ExerciseSuccess.styled';

import imgHead1x from '../../img/like-1x.png';
import imgHead2x from '../../img/like-2x.png';
import { WrapperIconArrow } from 'components/AddProductSuccess/AddProductSuccess.styled';
import { Icon } from 'components/Icon/Icon';

export const AddExerciseSuccess = ({
  onClose,
  caloriesAdded,
  remainingTime,
}) => {
  const formatTime = totalSeconds => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}. ${formattedSeconds} second`;
  };

  return (
    <>
      <WrapperCloseIcon onClick={onClose}>
        <IconClose iconid="icon-arrow" width={22} height={22} />
      </WrapperCloseIcon>

      <Wrapper>
        <ImageEl
          src={imgHead1x}
          srcSet={`${imgHead1x} 1x, ${imgHead2x} 2x`}
          alt="Success"
        />
        <Heading>Well done</Heading>

        <ExerciseTime>
          Your time:<Span>{formatTime(Math.floor(remainingTime))}</Span>
        </ExerciseTime>
        <Calories>
          Burned calories:<span>{caloriesAdded}</span>
        </Calories>
        <ProductButton onClick={onClose}>Next exercise</ProductButton>
        <WrapperDiaryLink to="/diary">
          <DiaryLink>To the diary </DiaryLink>
          <WrapperIconArrow>
            <Icon width="16px" height="16px" iconid="icon-arrow" />
          </WrapperIconArrow>
        </WrapperDiaryLink>
      </Wrapper>
    </>
  );
};
