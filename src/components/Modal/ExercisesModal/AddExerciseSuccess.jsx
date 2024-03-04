import Modal from 'react-modal';
import {
  Wrapper,
  ImageEl,
  DiaryLink,
  Heading,
  Calories,
  ProductButton,
  customStyles
} from './ExerciseSuccess.styled';

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
        <Wrapper>
          <ImageEl src={img} alt="Success" style={{ marginBottom: '1rem' }} />
          <Heading>Well done</Heading>

          <Calories>
            Your time:<span> 3 minutes</span>
          </Calories>
          <Calories>
            Burned calories: <span>{caloriesAdded}</span>
          </Calories>
          <ProductButton onClick={onClose}>Next product</ProductButton>
          <div>
            <DiaryLink to="/diary">To the diary </DiaryLink>
            <svg>
              <use href='./img/IconArrow.svg'></use>
          </svg>
          </div>
        </Wrapper>
      </Modal>
    </>
  );
};
