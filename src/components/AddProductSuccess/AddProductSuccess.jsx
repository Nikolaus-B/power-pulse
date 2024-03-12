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
  WrapperIconArrow,
} from './AddProductSuccess.styled';
import avocado1x from '../../img/avocado-1x.png';
import avocado2x from '../../img/avocado-2x.png';

export const AddProductSuccess = ({ onClose, caloriesAdded }) => {
  return (
    <>
      <WrapperCloseIcon onClick={onClose}>
        <Icon width="22px" height="22px" iconid="x-white" />
      </WrapperCloseIcon>
      <Wrapper>
        <ImageEl
          src={avocado1x}
          srcSet={`${avocado1x} 1x, ${avocado2x} 2x`}
          alt="Success"
        />
        <Heading>Well done</Heading>

        <Calories>
          Calories:<span> {caloriesAdded}</span>
        </Calories>
        <ProductButton onClick={onClose}>Next product</ProductButton>
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
