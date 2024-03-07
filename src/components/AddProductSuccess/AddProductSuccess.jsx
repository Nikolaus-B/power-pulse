import Modal from 'react-modal';
// import img from './img/112121.png';
import { CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import { customStyles } from '../AddProductForm/AddProductForm.styled';
import {
  Wrapper,
  ImageEl,
  DiaryLink,
  Heading,
  Calories,
  ProductButton,
  WrapperCloseIcon,
  WrapperDiaryLink,
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
        <WrapperCloseIcon onClick={onClose}>
          <CloseIcon w={11} h={11} />
        </WrapperCloseIcon>
        <Wrapper>
          {/* <ImageEl src={img} alt="Success" /> */}
          <Heading>Well done</Heading>

          <Calories>
            Calories:<span> {caloriesAdded}</span>
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
