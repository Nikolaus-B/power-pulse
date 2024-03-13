import styled from 'styled-components';

export const DiaryContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const ProductAndExercises = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;
