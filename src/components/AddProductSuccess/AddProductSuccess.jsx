import img from '../../img/avocado-1x.png';
import { CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons';
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
  onCloseSuccess
}) => {
  return (
    <>
        <WrapperCloseIcon onClick={onClose}>
          <CloseIcon w={11} h={11} />
        </WrapperCloseIcon>
        <Wrapper>
          <ImageEl src={img} alt="Success" />
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
    </>
  );
};
