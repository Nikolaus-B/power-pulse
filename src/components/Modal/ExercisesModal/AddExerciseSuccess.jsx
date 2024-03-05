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
} from './ExerciseSuccess.styled';

import { CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import img from './img/Thumb_up.png';

export const AddExerciseSuccess = ({
  isSuccessOpen,
  onClose,
  caloriesAdded,
}) => {
  return (
    <>
      <Modal
        isOpen={isSuccessOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Add Product Modal"
      >
        <WrapperCloseIcon onClick={onClose}>
          <CloseIcon w={11} h={11} />
        </WrapperCloseIcon>

        <Wrapper>
          <ImageEl src={img} alt="Success" style={{ marginBottom: '1rem' }} />
          <Heading>Well done</Heading>

          <ExerciseTime>
            Your time:<span>3 minutes</span>
          </ExerciseTime>
          <Calories>
            Burned calories:<span>{caloriesAdded}</span>
          </Calories>
          <ProductButton onClick={onClose}>Next product</ProductButton>
          <WrapperDiaryLink to="/diary">
            <DiaryLink>To the diary </DiaryLink>
            <div>
              <ArrowForwardIcon boxSize={24} color="rgba(239, 237, 232, 0.3)" />
            </div>
          </WrapperDiaryLink>
        </Wrapper>
      </Modal>
    </>
  );
};
