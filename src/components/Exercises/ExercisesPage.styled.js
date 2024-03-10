import styled from 'styled-components';

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: var(--text-categories-color);
    align-items: center;
    line-height: 18px;
`

export const Svg = styled.span`
    margin-right: 5px;
    padding: 0;
    align-items: center;
`

export const TitleWrap = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 64px;
    }

`;