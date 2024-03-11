import React from 'react';
import {
  DayExercisesContainer,
  DayExercisesIcon,
  DayExercisesMobileElement,
  DayExercisesMobileList,
  DayExercisesTitle,
  DeleteExerciseBtn,
  ExercisesCaloriesTitle,
  ExercisesCaloriesWrapper,
  ExercisesContainer,
  ExercisesHeader,
  ExercisesLink,
  ExercisesTable,
  ExercisesTableTitle,
  ExercisesTableValue,
  ExercisesTableValueContainer,
  Exerciseslist,
  NotFoundExercises,
  ValueContainer,
} from './DayExercises.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryExercises } from '../../redux/diary/diarySelectors';
import { Icon } from 'components/Icon/Icon';
import { DayExerciseItem } from './DayExerciseItem';
import { fetchDeleteExercise } from '../../redux/diary/operations';

export const DayExercises = ({ media }) => {
  const exercises = useSelector(selectDiaryExercises);
  const dispatch = useDispatch();

  const deleteExercise = id => {
    dispatch(fetchDeleteExercise(id));
  };

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
          <>
            {media ? (
              <DayExercisesContainer>
                <ExercisesTable id="exercises">
                  <thead>
                    <tr>
                      <ExercisesTableTitle>Body Part</ExercisesTableTitle>
                      <ExercisesTableTitle>Equipment</ExercisesTableTitle>
                      <ExercisesTableTitle>Name</ExercisesTableTitle>
                      <ExercisesTableTitle>Target</ExercisesTableTitle>
                      <ExercisesTableTitle>
                        <ExercisesCaloriesWrapper>
                          <ExercisesCaloriesTitle>
                            Burned Calories
                          </ExercisesCaloriesTitle>
                        </ExercisesCaloriesWrapper>
                      </ExercisesTableTitle>
                      <ExercisesTableTitle>Time</ExercisesTableTitle>
                    </tr>
                  </thead>

                  <tbody>
                    {exercises.map((el, i) => {
                      return (
                        <tr key={el._id}>
                          <ExercisesTableValueContainer>
                            <ValueContainer>
                              <ExercisesTableValue>
                                {el.exerciseId.bodyPart}
                              </ExercisesTableValue>
                            </ValueContainer>
                          </ExercisesTableValueContainer>
                          <ExercisesTableValueContainer>
                            <ValueContainer className="equipment">
                              <ExercisesTableValue>
                                {el.exerciseId.equipment}
                              </ExercisesTableValue>
                            </ValueContainer>
                          </ExercisesTableValueContainer>
                          <ExercisesTableValueContainer>
                            <ValueContainer className="name">
                              <ExercisesTableValue>
                                {el.exerciseId.name}
                              </ExercisesTableValue>
                            </ValueContainer>
                          </ExercisesTableValueContainer>
                          <ExercisesTableValueContainer>
                            <ValueContainer className="target">
                              <ExercisesTableValue>
                                {el.exerciseId.target}
                              </ExercisesTableValue>
                            </ValueContainer>
                          </ExercisesTableValueContainer>
                          <ExercisesTableValueContainer>
                            <ValueContainer className="calories">
                              <ExercisesTableValue>
                                {el.calories}
                              </ExercisesTableValue>
                            </ValueContainer>
                          </ExercisesTableValueContainer>
                          <ExercisesTableValueContainer>
                            {el.time}
                          </ExercisesTableValueContainer>
                          <td>
                            <DeleteExerciseBtn
                              style={{ marginTop: '0px' }}
                              onClick={() => deleteExercise(el._id)}
                            >
                              <Icon
                                width={20}
                                height={20}
                                iconid={'trash-icon'}
                              />
                            </DeleteExerciseBtn>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </ExercisesTable>
              </DayExercisesContainer>
            ) : (
              <>
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
                        <DeleteExerciseBtn
                          onClick={() => deleteExercise(el._id)}
                        >
                          <Icon width={20} height={20} iconid={'trash-icon'} />
                        </DeleteExerciseBtn>
                      </DayExercisesMobileElement>
                    );
                  })}
                </DayExercisesMobileList>
              </>
            )}
          </>
        ) : (
          <NotFoundExercises>Not found exercises</NotFoundExercises>
        )}
      </Exerciseslist>
    </ExercisesContainer>
  );
};
