// import React, { useEffect, useState } from 'react';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// import { useCountdown } from 'react-countdown-circle-timer';

// // import pausePng from './img/IconPause.svg';

// import {
//   Wrapper,
//   ImageExercise,
//   Timetext,
//   WrapperTimer,
//   PauseButton,
//   BurnedCalories,
//   InfoList,
//   InfoItem,
//   AddToDiaryButton,
// } from './ExerciseModal.styled';

// export const AddExerciseForm = ({
//   exerciseData,
//   onClose,
//   onSuccess,
//   onError,
//   caloriesAdded
// }) => {
//   const { gifUrl, name, target, bodyPart, equipment, burnedCalories, time } =
//     exerciseData;

//     const seconds = time * 60;
//     const caloriesPerMin = burnedCalories / time;

//     const [isPaused, setIsPaused] = useState(true);
//     const [totalCalories, setTotalCalories] = useState(0);
//     const [totalTime, setTotalTime] = useState(0);

//     const calculateCalories = (elapsedTime) => {
//       const elapsedMinutes = elapsedTime / 60;
//       const caloriesBurned = elapsedMinutes * caloriesPerMin;
//       return Math.round(caloriesBurned);
//     };

//     const formatTime = (time) => {
//       return time < 10 ? `0${time}` : `${time}`;
//     };

//     const children = ({ remainingTime }) => {
//       const minutes = Math.floor(remainingTime / 60);
//       const seconds = remainingTime % 60;
//       return `${formatTime(minutes)}:${formatTime(seconds)}`;
//     };

//     const { elapsedTime } = useCountdown({
//       isPlaying: isPaused,
//       duration: seconds,
//       colors: ['rgba(230, 83, 60, 1)'],
//       trailColor: 'rgba(239, 237, 232, 0.1)',
//       colorsTime: [7, 5, 2, 0],
//       size: 124,
//       strokeWidth: 4,
//       viewBox: '0 0 125 124',
//     });

//     useEffect(() => {
//       setTotalCalories(calculateCalories(elapsedTime));
//       setTotalTime(elapsedTime);
//     }, [elapsedTime ]);

//   return (
//     <Wrapper>
//       <ImageExercise src={gifUrl} alt="Exercise GIF" />
//       <WrapperTimer>
//         <Timetext>Time</Timetext>
//         <CountdownCircleTimer
//           isPlaying={isPaused}
//           duration={180}
//           colors={'rgba(230, 83, 60, 1)'}
//           trailColor="rgba(239, 237, 232, 0.1)"
//           colorsTime={[7, 5, 2, 0]}
//           size={124}
//           strokeWidth={4}
//           viewBox="0 0 125 124"
//         >
//           {children}
//         </CountdownCircleTimer>

//         <PauseButton onClick={() => setIsPaused(!isPaused)}>
//           {/* <img src={pausePng} alt="pause" size="8"></img> */}
//         </PauseButton>
//         <BurnedCalories>
//           Burned calories : <span>{totalCalories}</span>
//         </BurnedCalories>
//       </WrapperTimer>
//       <InfoList>
//         <InfoItem>
//           <p>Name</p>
//           <p>{name}</p>
//         </InfoItem>
//         <InfoItem>
//           <p>Target</p> <p>{target}</p>
//         </InfoItem>
//         <InfoItem>
//           <p>Body Parts</p> <p>{bodyPart}</p>
//         </InfoItem>
//         <InfoItem>
//           <p>Equipmen</p>
//           <p>{equipment}</p>
//         </InfoItem>
//       </InfoList>
//       <AddToDiaryButton
//         onClick={() => {
//           onSuccess();
//           caloriesAdded(totalCalories)
//         }}
//       >
//         Add to diary
//       </AddToDiaryButton>
//     </Wrapper>
//   );
// };

import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useCountdown } from 'react-countdown-circle-timer';

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
  caloriesAdded,
  updateRemainingTime
}) => {
  const { gifUrl, name, target, bodyPart, equipment, burnedCalories, time } =
    exerciseData;

  const seconds = time * 60;
  const caloriesPerMin = burnedCalories / seconds;

  const [isPaused, setIsPaused] = useState(true);
  const [totalCalories, setTotalCalories] = useState(0);

  const calculateCalories = (elapsedTime) => {
    const elapsedMinutes = elapsedTime / 60;
    const caloriesBurned = elapsedMinutes * caloriesPerMin;
    return Math.round(caloriesBurned);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${formatTime(minutes)}:${formatTime(seconds)}`;
  };

  const { elapsedTime } = useCountdown({
    isPlaying: isPaused,
    duration: seconds,
    colors: ['rgba(230, 83, 60, 1)'],
    trailColor: 'rgba(239, 237, 232, 0.1)',
    colorsTime: [7, 5, 2, 0],
    size: 124,
    strokeWidth: 4,
    viewBox: '0 0 125 124',
    // onPause: (remainingTime) => setRemainingTime(remainingTime),
    // onPause: (remainingTime) => {
    //   setRemainingTime(remainingTime);
    //   // updateRemainingTime(remainingTime); // Виклик функції для оновлення залишкового часу через пропс
    // },
  });

  
  useEffect(() => {
    setTotalCalories(calculateCalories(elapsedTime),

    );
  }, [elapsedTime]);

  return (
    <Wrapper>
      <ImageExercise src={gifUrl} alt="Exercise GIF" />
      <WrapperTimer>
        <Timetext>Time</Timetext>
        <CountdownCircleTimer
          isPlaying={isPaused}
          duration={seconds}
          colors={'rgba(230, 83, 60, 1)'}
          trailColor="rgba(239, 237, 232, 0.1)"
          colorsTime={[7, 5, 2, 0]}
          size={124}
          strokeWidth={4}
          viewBox="0 0 125 124"
        >
          {children}
        </CountdownCircleTimer>

    <PauseButton onClick={() => {setIsPaused(!isPaused)}
        
        }>
          {/* <img src={pausePng} alt="pause" size="8"></img> */}
        </PauseButton>
        <BurnedCalories>
          Burned calories : <span>{totalCalories}</span>
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
      <AddToDiaryButton
        onClick={() => {
          onSuccess();
          caloriesAdded(totalCalories);
          updateRemainingTime(elapsedTime)
        }}
      >
        Add to diary
      </AddToDiaryButton>
    </Wrapper>
  );
};