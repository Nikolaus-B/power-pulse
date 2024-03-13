import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 64px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 32px 16px;
        margin-bottom: 0;
    }

    @media screen and (min-width: 1440px) {
        margin-bottom: 0;
    } 
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
    gap: 8px;
    margin-top: 40px;
    justify-content: center;
    @media screen and (min-width: 768px) {
        position: relative; 
        gap: 8px;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Container = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 792px; 
    }

    @media screen and (min-width: 1440px) {
        height: 554px;
    }
`;