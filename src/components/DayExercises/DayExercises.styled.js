import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';

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
  text-align: center;
  color: var(--orange-color);
  transition: color var(--transition-dur-and-func);
  &:hover,
  &:focus {
    color: var(--orange_1-color);
  }
`;

export const ExercisesIcon = styled(Icon)`
  margin-bottom: -2px;
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