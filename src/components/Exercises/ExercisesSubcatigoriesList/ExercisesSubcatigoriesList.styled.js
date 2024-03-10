import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 32px 16px;
        margin-bottom: 64px;
    }

    @media screen and (min-width: 1440px) {
        margin-bottom: 0;

    } 
`;