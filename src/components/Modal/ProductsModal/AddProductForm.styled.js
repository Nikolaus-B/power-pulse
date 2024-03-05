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
  color: #EFEDE8;

  @media screen and (min-width: 768px) and (max-width: 1439px)  {
    padding: 48px 32px;
  }
`;

const WrapperCloseIcon = styled.div`
position: fixed;
top: 18px;
right: 18px;
cursor: pointer;

`

const WrapperInputForm = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1439px)  {
    display: flex;
    gap: 16px;
  }
`

const ProductInput = styled.input`
  width: 287px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid;
  border-color: rgba(230, 83, 60, 1);
  font-size: 14px;
  line-height: 1.28;
  color: rgba(239, 237, 232, 0.3);
  padding: 8px 14px 8px 14px;
  margin-bottom: 16px;
  background-color: transparent;
  outline: none;

  @media screen and (min-width: 768px) and (max-width: 1439px)  {
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
  color: #EFEDE8 ;
  font-size: 14px;
  line-height: 1.28;
  padding: 8px 60px 8px 14px;
  margin-bottom: 16px;
  background-color: transparent;
  outline: none;

  @media screen and (min-width: 768px) and (max-width: 1439px)  {
    width: 155px;
    font-size: 16px;
    line-height: 1.5;
    height: 40px;
  }
`;


const Span = styled.span`
  font-size: 12px;
  line-height : 1.5;
  color: rgba(239, 237, 232, 0.4);
  position: fixed;
  right: 42px;
  top: 115px;
  transform: translateY(-50%);

  @media screen and (min-width: 768px) and (max-width: 1439px)  {
    top: 59px;
  }
`;

const Text = styled.p`
  font-size: 12px;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;
  position: relative;
`;

const AddToDiaryButton = styled.button`
  /* width: 151px; */
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);
  padding: 12px 32px;
  color: #EFEDE8;
`;

const CancelButton = styled.button`
  /* width: 121px; */
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  margin-left: 14px;
  padding: 12px 36px;
  font-size: 16px;
  line-height: 18px;
  color: #EFEDE8;
  background-color: transparent;
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
  WrapperInputForm
};
