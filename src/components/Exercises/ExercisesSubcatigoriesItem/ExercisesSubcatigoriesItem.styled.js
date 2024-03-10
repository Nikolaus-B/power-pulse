import styled from "styled-components";

export const Li = styled.li`
    width: 335px;
    height: 206px;  
    display: block;
    max-width: 100%;
    object-fit: cover;
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-radius: 12px;
    padding: 81px 0;
`;

export const SubTitle = styled.h1`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: var(--white-color);
    margin-bottom: 2px;
`;

export const CategoryTitle = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: rgba(239, 237, 232, 0.4);
`;

export const Input = styled.input`
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