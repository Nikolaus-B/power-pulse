import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import {
  IconWrapper,
  Wrapper,
  ImageExercise,
  Timetext,
  WrapperTimer,
  BurnedCalories,
  InfoList,
  InfoItem,
  AddToDiaryButton,
} from './ExerciseForm.styled';
import { Icon } from 'components/Icon/Icon';
export const AddExerciseForm = ({
  exerciseData,
  onCloseForm,
  caloriesAdded,
  updateRemainingTime,
}) => {
  const { gifUrl, name, target, bodyPart, equipment, burnedCalories, time } =
    exerciseData;

  function secondsToMinutes(seconds) {
    let minutes = seconds / 60;
    return minutes.toFixed(2);
  }

  const [isPaused, setIsPaused] = useState(true);
  const [dynamicBurnCal, setDynamicBurnCal] = useState(0);
  const [dynamicTime, setDynamicTime] = useState(0);

  const formatTime = t => {
    return t < 10 ? `0${t}` : `${t}`;
  };

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <div>
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
    );
  };

  const handleTime = time => {
    const newTime = 180 - time;
    setDynamicTime(newTime);
  };

  const handleAddToDiary = () => {
    onCloseForm();
    caloriesAdded(dynamicBurnCal);
    updateRemainingTime(dynamicTime);
  };

  useEffect(() => {
    let updatedCalories = Math.round(
      (secondsToMinutes(dynamicTime) * burnedCalories) / 3
    );
    setDynamicBurnCal(updatedCalories);
  }, [dynamicTime, burnedCalories]);


  return (
    <Wrapper>
      <ImageExercise src={gifUrl} alt="Exercise GIF" />
      <WrapperTimer>
        <Timetext>Time</Timetext>
        <CountdownCircleTimer
          isPlaying={isPaused}
          duration={time * 60}
          colors={'rgba(230, 83, 60, 1)'}
          trailColor="rgba(239, 237, 232, 0.1)"
          colorsTime={[7, 5, 2, 0]}
          size={124}
          strokeWidth={4}
          viewBox="0 0 125 124"
          onUpdate={remainingTime => {
            handleTime(remainingTime);
          }}
        >
          {children}
        </CountdownCircleTimer>

        <IconWrapper
          style={{ marginTop: '18px' }}
          onClick={() => {
            setIsPaused(!isPaused);
          }}
        >
          {isPaused ? (
            <Icon width="24" height="24" iconid="pause"/>
          ) : (
            <Icon width="24" height="24" iconid="play"/>
          )}
        </IconWrapper>
        <BurnedCalories>
          Burned calories : <span>{dynamicBurnCal}</span>
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
          <p>Equipment</p>
          <p>{equipment}</p>
        </InfoItem>
      </InfoList>
      <AddToDiaryButton onClick={() => handleAddToDiary()}>
        Add to diary
      </AddToDiaryButton>
    </Wrapper>
  );
};
