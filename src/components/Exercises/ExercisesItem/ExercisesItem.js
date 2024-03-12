import React, { useState }from 'react';
import {
  Workout,
  Button,
  HeaderWrapper,
  Container,
  TitleWrapper,
  TitleText,
  InfoWrapper,
  Text,
  WorkoutContainer,
  DarkText,
  IconWrap,
  StartWrap
} from './ExercisesItem.styled';
import { Icon } from 'components/Icon/Icon';
import {
  customStyles,
  BasicModalWindow,
} from '../../AddExerciseSuccess/customStylesModal';
import { AddExerciseForm } from '../../AddExerciseForm/AddExerciseForm';
import { AddExerciseSuccess } from '../../AddExerciseSuccess/AddExerciseSuccess';

BasicModalWindow.setAppElement('#root'); 

export const ExercisesItem = ({ exercise }) => {

  const [isOpen, setIsOpen] = useState();
  const [caloriesAdded, setCaloriesAdded] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const { name, burnedCalories, bodyPart, target } = exercise;

  const handleStartClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = (time) => {
    setIsOpen(false);
    setRemainingTime(time)
  };

  const handleCloseForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseSuccess = () => {
    setIsFormVisible(!isFormVisible);
    setIsOpen(false);
  };


  const handleAddCalories = calories => {
    setCaloriesAdded(calories);
  };

    const handleRemainingTime = time => {
    setRemainingTime(time);
  };

  return (
    <Container>
      <HeaderWrapper>
        <WorkoutContainer>
          <Workout>WORKOUT</Workout>
        </WorkoutContainer>
        <Button type="button" onClick={handleStartClick}>
          Start
          <StartWrap>
            <Icon width={16} height={16} iconid={'arrow'} />
          </StartWrap>
        </Button>
      </HeaderWrapper>
      <TitleWrapper>
        <IconWrap>
          <Icon width={24} height={24} iconid={'circle-running-man'} />
        </IconWrap>
        <TitleText>{name}</TitleText>
      </TitleWrapper>
      <InfoWrapper>
        <DarkText>
          Burned calories: <Text>{burnedCalories}</Text>
        </DarkText>
        <DarkText>
          Body part: <Text>{bodyPart}</Text>
        </DarkText>
        <DarkText>
          Target: <Text>{target}</Text>
        </DarkText>
      </InfoWrapper>
      <BasicModalWindow
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Add Product Modal"
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
              {isFormVisible ? (
                <AddExerciseForm
                exerciseData={exercise}
                onCloseForm={handleCloseForm}
                caloriesAdded={handleAddCalories}
                updateRemainingTime={handleRemainingTime}
                />
              ) : (
                <AddExerciseSuccess
                onClose={handleCloseSuccess}
                caloriesAdded={caloriesAdded}
                remainingTime={remainingTime}
                />
              )}

      </BasicModalWindow>
    </Container>
  );
};
