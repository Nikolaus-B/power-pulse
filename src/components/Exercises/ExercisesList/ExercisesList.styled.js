import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    max-width: calc(335px * 2 + 16px + 12px + 32px + 8px);
    max-height: 660px;
    overflow-y: scroll;
    scrollbar-color: var(--orange_1-color);
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--orange_1-color);
      border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }
  }
  @media screen and (min-width: 1440px) {
    max-height: 487px;
    max-width: calc(405px * 2 + 16px * 2 + 8px);

  }
`;