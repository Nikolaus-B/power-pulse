import styled from 'styled-components';
import BgImg1x from '../../../img/products-1x.jpg';
import BgImg2x from '../../../img/products-2x.jpg';

const PageContainer = styled.div`
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    background-image: url(${BgImg1x});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    height: 716px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgImg2x});
    }
  }
`;

const Container = styled.div`
  @media screen and (min-width: 1440px) {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 375px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    max-width: 664px;
    margin: 32px 0px;
    justify-content: flex-start;
    font-size: 16px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--text-info-color);
  border-radius: 12px;
  padding: 14px;
  width: 335px;
  height: 46px;
  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
  }
`;

const Input = styled.input`
  font-size: 14px;
  border: none;
  outline: none;
  background-color: inherit;
  color: var(--white-color);
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const InputButton = styled.button`
  width: 18px;
  height: 18px;
  padding: 1px;
  background-color: inherit;
  border: none;
`;

const SelectLevel = styled.select`
  font-size: 14px;
  border: 1px solid var(--text-info-color);
  border-radius: 12px;
  padding: 14px;
  width: 173px;
  background-color: inherit;
  color: var(--white-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M4.5%206.75L9%2011.25L13.5%206.75%22%20stroke%3D%22%23EFEDE8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%2F%3E%0A%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 14px center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 204px;
  }
`;

const Option = styled.option`
  background: #1c1c1c;
  border: none;
  outline: none;
  border-radius: 12px;
  padding: 14px 32px 14px 14px;
  margin-bottom: 8px;
  max-height: 228px;
`;

export {
  PageContainer,
  Container,
  Form,
  InputWrapper,
  Input,
  ButtonWrapper,
  InputButton,
  SelectLevel,
  Option,
};
