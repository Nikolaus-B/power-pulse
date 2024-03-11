import React from 'react';
import {
  DayExercisesIcon,
  DayExercisesMobileElement,
  DayExercisesMobileList,
  DayExercisesTitle,
  DeleteExerciseBtn,
  ExercisesContainer,
  ExercisesHeader,
  ExercisesLink,
  Exerciseslist,
  NotFoundExercises,
} from './DayExercises.styled';
import { useSelector } from 'react-redux';
import { selectDiaryExercises } from '../../redux/diary/diarySelectors';
import { Icon } from 'components/Icon/Icon';
import { DayExerciseItem } from './DayExerciseItem';

export const DayExercises = ({ media }) => {
  const exercises = useSelector(selectDiaryExercises);

  return (
    <ExercisesContainer>
      <ExercisesHeader>
        <DayExercisesTitle>Exercises</DayExercisesTitle>
        <ExercisesLink to="/exercises">
          Add Exercise{' '}
          <DayExercisesIcon height={15} width={15} iconid={'arrow'} />
        </ExercisesLink>
      </ExercisesHeader>
      <Exerciseslist>
        {exercises.length ? (
          <div>
            {media ? (
              <table id="products">
                <thead>
                  <tr>
                    <th>Body Part</th>
                    <th>Equipment</th>
                    <th>Name</th>
                    <th>Target</th>
                    <th>Burned Calories</th>
                    <th>Time</th>
                  </tr>
                </thead>

                <tbody>
                  {exercises.map((el, i) => {
                    return (
                      <tr key={el._id}>
                        <td>{el.exerciseId.bodyPart}</td>
                        <td>{el.exerciseId.equipment}</td>
                        <td>{el.exerciseId.name}</td>
                        <td>{el.exerciseId.target}</td>
                        <td>{el.calories}</td>
                        <td>{el.time}</td>
                        <td>
                          <button>
                            <Icon
                              width={20}
                              height={20}
                              iconid={'trash-icon'}
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <DayExercisesMobileList>
                {exercises.map((el, i) => {
                  return (
                    <DayExercisesMobileElement key={el._id}>
                      <DayExerciseItem
                        title={'Body Part'}
                        value={el.exerciseId.bodyPart}
                      />
                      <DayExerciseItem
                        title={'Equipment'}
                        value={el.exerciseId.equipment}
                      />
                      <DayExerciseItem
                        title={'Name'}
                        value={el.exerciseId.name}
                      />
                      <DayExerciseItem
                        title={'Target'}
                        value={el.exerciseId.target}
                      />
                      <DayExerciseItem
                        title={'Burned Calories'}
                        value={el.calories}
                      />
                      <DayExerciseItem title={'Time'} value={el.time} />
                      <DeleteExerciseBtn>
                        <Icon width={20} height={20} iconid={'trash-icon'} />
                      </DeleteExerciseBtn>
                    </DayExercisesMobileElement>
                  );
                })}
              </DayExercisesMobileList>
            )}
          </div>
        ) : (
          <NotFoundExercises>Not found exercises</NotFoundExercises>
        )}
      </Exerciseslist>
    </ExercisesContainer>
  );
};
