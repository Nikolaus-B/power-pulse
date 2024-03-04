import Modal from 'react-modal';
import img from './img/112121.png';

import { customStyles } from './AddProductForm.styled';
import {
  Wrapper,
  ImageEl,
  DiaryLink,
  Heading,
  Calories,
  ProductButton,
} from './AddProductSuccess.styled';

export const AddProductSuccess = ({
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
            Calories:<span> {caloriesAdded}</span>
          </Calories>
          <ProductButton onClick={onClose}>Next product</ProductButton>
          <div>
            <DiaryLink to="/diary">To the diary </DiaryLink>
            {/* <svg>
              <use href='./img/IconArrow.svg'></use>
          </svg> */}
          </div>
        </Wrapper>
      </Modal>
    </>
  );
};
