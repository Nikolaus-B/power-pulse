import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    gap: 28px;
    margin-bottom: 40px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        margin: 0;
        gap: 32px;
        height: 32px;
    }
`;

export const Category = styled.p`
    position: relative;
    color: ${props => props.selected ? 'var(--white-color)' : 'var(--text-categories-color)'};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: ${(props) => (props.selected ? '4px' : '0')};
    background-color: ${(props) => (props.selected ? 'var(--orange_1-color)' : 'transparent')};
    border-radius: 2px;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        font-size: 16px;
        line-height: 1.5;
    }
`;