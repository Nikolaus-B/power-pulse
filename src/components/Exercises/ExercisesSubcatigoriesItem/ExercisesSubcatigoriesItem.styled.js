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