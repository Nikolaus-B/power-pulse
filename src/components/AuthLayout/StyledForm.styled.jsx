import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
   display: flex;
    flex-direction: column;
    gap: 18px;
    justify-content: center;
  }
`;
export const StyledFormIn = styled(Form)`
   display: flex;
    flex-direction: column;
    gap: 14px;
    justify-content: center;
  }
`;

export const Input = styled(Field)`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: #efede8;
  width: 93%;
  max-width: 335px;
  height: 46px;
  border-radius: 12px;
  padding-left: 14px;
  outline: none;

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(239, 237, 232, 0.6);
  }

  &:hover {
    border: 1px solid #e6533c;
  }
  &:focus {
    border: 1px solid #e6533c;
  }
  &.default {
    outline: 1px solid rgba(239, 237, 232, 0.3);
  }
  &.error {
    border: 1px solid #d80027;
  }
  &.success {
    border: 1px solid #3cbf61;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6533c;
  width: 136px;
  height: 42px;
  border-radius: 12px;
  border: none;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 19px;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    margin-top: 64px;
    font-size: 20px;
    line-height: 24px;
  }
`;
