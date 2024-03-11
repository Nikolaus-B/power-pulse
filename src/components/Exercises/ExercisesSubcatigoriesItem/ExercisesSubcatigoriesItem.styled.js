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

    @media screen and (min-width: 768px) {
        width: 224px;
    }
    @media screen and (min-width: 1440px) {
        width: 236.8px;
    }
`;

export const SubTitle = styled.h1`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: var(--white-color);
    margin-bottom: 2px;
    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 1.33;
    }
`;

export const CategoryTitle = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
    color: rgba(239, 237, 232, 0.4);
`;

export const Input = styled.input`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    cursor: pointer;

    &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #040404;
    color: var(--orange-color);
    border: var(--orange-color);
    border-radius: 50%;
    box-shadow: inset 10px 10px var(--orange-color);
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    }

    &:hover:before,
    &:checked:before {
        transform: scale(1);
    }

    &:not(:checked) {
    background-color: rgba(239, 237, 232, 0.1);; 
    }

    &:checked {
    color: var(--orange-color);
    border: 1.5px solid currentColor;
    }
`;

export const RadioBtns = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
/* фиксированные кнопки на планшете */
    @media screen and (min-width: 768px) {
        gap: 8px;
        margin-top: 0;
        position: fixed;
            bottom: 32px;
            left: 50%;
            transform: translateX(-50%);
    }
    @media screen and (min-width: 1440px) {
        bottom: 46px;
    }
`;