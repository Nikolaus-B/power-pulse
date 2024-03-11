import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  // gap:18px;

  @media screen and (min-width: 768px) {
    width: 364px;
    // gap: 20px;
  }
`;

export const Contsform = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
`;

export const StyledFormIn = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 364px;
    // gap: 20px;
  }
`;

export const Input = styled(Field)`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: #efede8;
  width: 100%;
  height: 46px;
  border-radius: 12px;
  padding-left: 14px;
  outline: none;

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28;

    color: rgba(239, 237, 232, 0.6);
  }

  &:hover {
    border: 1px solid #e6533c;
  }
  &:focus {
    border: 1px solid #e6533c;
  }
  &.default {
    outline: 1px solid rgba(239, 237, 232, 0.6);
  }
  &.error {
    border: 1px solid #d80027;
  }
  &.success {
    border: 1px solid #3cbf61;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
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
  line-height: 1.25;
  margin-top: 28px;
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
    line-height: 1.2;
  }
`;

export const MessageInput = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SvgIcon = styled.svg`
  fill: #d80027;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-top: 1px;
`;

export const ErrorText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01em;
  text-align: left;
  color: #d80027;
`;

export const SuccessText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3cbf61;
`;

export const SuccessSvg = styled.svg`
  fill: #3cbf61;
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
export const Icons = styled.svg`
  stroke: rgba(239, 237, 232, 1);
  width: 20px;
  height: 20px;
  position: absolute;
  left: 320px;
  bottom: 192px;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 360px;
    bottom: 240px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 422px;
    bottom: 230px;
  }
`;
export const IconsIn = styled.svg`
  stroke: rgba(239, 237, 232, 1);
  width: 20px;
  height: 20px;
  position: absolute;
  left: 320px;
  bottom: 205px;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 362px;
    bottom: 254px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 426px;
    bottom: 243px;
  }
`;
