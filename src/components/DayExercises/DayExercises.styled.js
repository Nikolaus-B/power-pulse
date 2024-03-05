import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExercisesContainer = styled.div`
  position: relative;
  height: 335px;
  padding: 16px;
  border: 1px solid var(--border-static-color);
  border-radius: 12px;

  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`;

export const ExercisesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const DayExercisesTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: var(--text-categories-color);
`;

export const ExercisesLink = styled(Link)`
  text-decoration: none;

  color: var(--orange-color);
`;

export const Exerciseslist = styled.div`
  display: block;
`;

export const NotFoundExercises = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--text-info-color);
`;
