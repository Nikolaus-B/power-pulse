import img from '../../img/avocado-1x.png';
import { CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Icon } from 'components/Icon/Icon';
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
  onClose,
  caloriesAdded,
}) => {
  return (
    <>
        <WrapperCloseIcon onClick={onClose}>
        <Icon width='22px' height='22px' iconid='x-white'/>
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
            <div style={{marginRight: '10px'}}>
              {/* <ArrowForwardIcon boxSize={24} color="rgba(239, 237, 232, 0.3)" /> */}
              <Icon width='16px' height='16px' iconid='arrow'/>
            </div>
          </WrapperDiaryLink>
        </Wrapper>
    </>
  );
};
