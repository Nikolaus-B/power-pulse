import styled from 'styled-components';
import { Field } from 'formik';

export const Radio = styled(Field)`
  width: 18px;
  height: 18px;
  margin-right: 9px;

  color: #ef8964;

  border: 1.5px solid currentColor;
  border-radius: 50%;

  transform: translateY(0.18rem);

  cursor: pointer;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: inset 10px 10px #ef8964;
    /* background-color: #ef8964; */
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }

  &:hover:before,
  &:checked:before {
    transform: scale(1);
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;

    transform: translateY(0.2rem);
  }
`;
