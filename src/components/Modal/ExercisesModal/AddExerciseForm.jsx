import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import pausePng from './img/IconPause.svg';

import {
  Wrapper,
  ImageExercise,
  Timetext,
  WrapperTimer,
  PauseButton,
  BurnedCalories,
  InfoList,
  InfoItem,
  AddToDiaryButton,
} from './ExerciseModal.styled';

export const AddExerciseForm = ({
  exerciseData,
  onClose,
  onSuccess,
  onError,
}) => {
  const { gifUrl, name, target, bodyPart, equipment, burnedCalories, time } =
    exerciseData;

  const [timer, setTimer] = useState(time * 60);
  const [calories, setCalories] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  // const calculateCalories = () => {
  //   const calories = (timer * burnedCalories) / 3;
  //   return Math.round(calories);
  // };


  return (
    <Wrapper>
      <ImageExercise src={gifUrl} alt="Exercise GIF" />
      <WrapperTimer>
        <Timetext>Time</Timetext>
        <CountdownCircleTimer
          isPlaying={isPaused}
          duration={180}
          colors={'rgba(230, 83, 60, 1)'}
          trailColor="rgba(239, 237, 232, 0.1)"
          colorsTime={[7, 5, 2, 0]}
          size={124}
          strokeWidth={4}
          viewBox="0 0 125 124"
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>

        <PauseButton onClick={() => setIsPaused(!isPaused)}>
          <img src={pausePng} alt="pause" size="8"></img>
        </PauseButton>
        <BurnedCalories>
          Burned calories : <span>{calories}</span>
        </BurnedCalories>
      </WrapperTimer>
      <InfoList>
        <InfoItem>
          <p>Name</p>
          <p>{name}</p>
        </InfoItem>
        <InfoItem>
          <p>Target</p> <p>{target}</p>
        </InfoItem>
        <InfoItem>
          <p>Body Parts</p> <p>{bodyPart}</p>
        </InfoItem>
        <InfoItem>
          <p>Equipmen</p>
          <p>{equipment}</p>
        </InfoItem>
      </InfoList>
      <AddToDiaryButton
        onClick={() => {
          onSuccess();
        }}
      >
        Add to diary
      </AddToDiaryButton>
    </Wrapper>
  );
};
