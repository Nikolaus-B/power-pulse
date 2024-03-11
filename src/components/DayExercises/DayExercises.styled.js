import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Icon/Icon';

export const ExercisesContainer = styled.div`
  position: relative;
  min-height: 335px;
  max-height: 824px;
  padding: 16px 12px 16px 16px;
  border: 1px solid var(--border-static-color);
  border-radius: 12px;

  @media screen and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    min-height: 234px;
    padding: 19px 32px 16px 32px;
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
  margin-left: 8px;
  color: var(--text-categories-color);
`;

export const DayExercisesIcon = styled(Icon)`
  margin-bottom: -5px;
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

export const Exerciseslist = styled.div`
  display: block;
`;

//* Mobile //

export const DayExercisesMobileList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 40px;

  height: 752px;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 6px;
  }
`;

export const DayExercisesMobileElement = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 12px;
`;

export const MobileItemContainer = styled.div``;

export const MobileExercisesTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 8px;
  color: var(--orange_1-color);
`;

export const MobileExercisesValueContainer = styled.div`
  display: block;
  height: 38px;
  padding: 10px 14px;
  border: 1px solid var(--text-info-color);
  border-radius: 12px;
  overflow: hidden;
  &.big {
    width: 295px;
  }

  &.small {
    width: 76px;
  }
`;

export const MobileExercisesValue = styled.p`
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

//* Desctop //

export const DayExercisesContainer = styled.div`
  height: 172px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ExercisesTable = styled.table`
  width: 672px;
  border-spacing: 8px;

  @media screen and (min-width: 1440px) {
    width: 762px;
  }
`;

export const ExercisesCaloriesWrapper = styled.div`
  width: 78px;
  overflow: hidden;
`;

export const ExercisesCaloriesTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--orange_1-color);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExercisesTableTitle = styled.th`
  text-align: left;
  font-size: 12px;
  line-height: 18px;

  color: var(--orange_1-color);
`;

export const TR = styled.tr``;

export const ExercisesTableValueContainer = styled.td`
  width: 72px;
  height: 40px;
  padding: 8px 14px;
  border: 1px solid var(--text-info-color);
  border-radius: 12px;
  overflow: hidden;
`;

export const ValueContainer = styled.div`
  width: 62px;
  overflow: hidden;

  &.equipment {
    width: 104px;
  }

  &.name {
    width: 100px;
  }

  &.target {
    width: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 87px;
    &.equipment {
      width: 129px;
    }

    &.name {
      width: 103px;
    }

    &.target {
      width: 78px;
    }

    &.calories {
      width: 63px;
    }
  }
`;

export const ExercisesTableValue = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  text-transform: capitalize;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

//* Btn //
export const DeleteExerciseBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-top: 34px;
  padding: 0px;

  background-color: transparent;
  border: none;
`;

//* Not Found *//

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
