import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    borderRadius: '12px',
    borderColor: 'rgba(239, 237, 232, 0.2)',
    backgroundColor: 'rgba(16, 16, 15, 1)',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.707)',
    zIndex: 1001,
  },
};

const ModalForm = styled.form`
  padding: 48px 24px;
  box-sizing: border-box;
  color: var(--primary-text-color);
  max-width: 100%;

  height: auto;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`;

const WrapperCloseIcon = styled.div`
  position: fixed;
  top: 14px;
  right: 14px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

const WrapperInputForm = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`;

const ProductInput = styled.input`
  width: 100%;
  height: 34px;
  border-radius: 12px;
  border: 1px solid;
  border-color: rgba(230, 83, 60, 1);
  font-size: 14px;
  line-height: 1.28;
  color: var(--text-info-color);
  padding: 8px 14px 8px 14px;
  margin-bottom: 16px;
  background-color: transparent;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 244px;
    font-size: 16px;
    line-height: 1.5;
    height: 40px;
  }
`;

const GrammInput = styled.input`
  width: 287px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid;
  border-color: rgba(230, 83, 60, 1);
  color: #efede8;
  font-size: 14px;
  line-height: 1.28;
  padding: 8px 60px 8px 14px;
  margin-bottom: 16px;
  background-color: transparent;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: 1.5;
    height: 40px;
  }
`;

const Span = styled.span`
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-categories-color);
  position: fixed;
  right: 42px;
  top: 115px;
  transform: translateY(-50%);

  @media screen and (min-width: 768px) {
    top: 68px;
  }
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-info-color);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

const AddToDiaryButton = styled.button`
  width: 151px;
  height: 42px;
  font-size: 16px;
  line-height: 1.12;
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);
  padding: 12px 32px;
  color: var(--primary-text-color);
  border: none;
  transition: transform 0.2s;

  @media screen and (min-width: 768px) {
    line-height: 1.5;
    padding: 14px 32px;
    height: 52px;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const CancelButton = styled.button`
  margin: 0;
  width: 121px;
  height: 42px;
  border: 1px solid;
  border-color: var(--text-info-color);
  border-radius: 12px;
  margin-left: 14px;
  font-size: 16px;
  line-height: 1.12;
  color: var(--primary-text-color);
  background-color: transparent;
  transition: transform 0.2s;

  @media screen and (min-width: 768px) {
    width: 142px;
    height: 52px;
    font-size: 20px;
    line-height: 1.2;
    margin-left: 16px;

    &:hover {
      border-color: var(--orange-color);
      transform: scale(1.02);
    }
  }
`;

export {
  AddToDiaryButton,
  CancelButton,
  customStyles,
  ModalForm,
  ProductInput,
  GrammInput,
  Text,
  Span,
  WrapperCloseIcon,
  WrapperInputForm,
};
