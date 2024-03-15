import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { toast } from 'react-hot-toast';

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
  TimerInfoWrapper,
  InfoListWrapper,
  WrapperCloseIcon,
} from './ExerciseForm.styled';
import { Icon } from 'components/Icon/Icon';
import { useDispatch } from 'react-redux';
import { fetchAddExercise } from '../../redux/diary/operations';
import { IconClose } from 'components/AddExerciseSuccess/ExerciseSuccess.styled';

export const AddExerciseForm = ({
  exerciseData,
  onCloseForm,
  caloriesAdded,
  updateRemainingTime,
}) => {
  const dispatch = useDispatch();
  const {
    gifUrl,
    name,
    target,
    bodyPart,
    equipment,
    burnedCalories,
    time,
    _id,
  } = exerciseData;

  function secondsToMinutes(seconds) {
    let minutes = seconds / 60;
    return minutes.toFixed(2);
  }

  const [isPaused, setIsPaused] = useState(true);
  const [dynamicBurnCal, setDynamicBurnCal] = useState(0);
  const [dynamicTime, setDynamicTime] = useState(0);

  const data = {
    exerciseId: _id,
    date: new Date()
      .toISOString()
      .split('T', 1)[0]
      .split('-')
      .reverse()
      .join('-'),
    time: dynamicTime,
    calories: dynamicBurnCal,
  };

  const addExercise = exerciseData => {
    dispatch(fetchAddExercise(exerciseData));
  };

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
    toast.success('Exercise added to diary!')
    onCloseForm();
    caloriesAdded(dynamicBurnCal);
    updateRemainingTime(dynamicTime);
    addExercise(data);
  };

  useEffect(() => {
    let updatedCalories = Math.round(
      (secondsToMinutes(dynamicTime) * burnedCalories) / 3
    );
    setDynamicBurnCal(updatedCalories);
  }, [dynamicTime, burnedCalories]);

  return (
    <Wrapper>
      <WrapperCloseIcon onClick={onCloseForm}>
        <IconClose iconid="x-white" width={26} height={26} />
      </WrapperCloseIcon>
      <TimerInfoWrapper>
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
              <Icon width="24" height="24" iconid="pause" />
            ) : (
              <Icon width="24" height="24" iconid="play" />
            )}
          </IconWrapper>
          <BurnedCalories>
            Burned calories : <span>{dynamicBurnCal}</span>
          </BurnedCalories>
        </WrapperTimer>
      </TimerInfoWrapper>
      <InfoListWrapper>
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
      </InfoListWrapper>
    </Wrapper>
  );
};
