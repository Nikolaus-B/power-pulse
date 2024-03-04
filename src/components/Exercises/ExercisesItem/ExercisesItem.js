import React from 'react';

export const ExercisesItem = ({ exercise }) => {
    const { name, burnedCalories, bodyPart, target } = exercise;

    // const handleStartClick = () => {
    //     // Handle start button click
    // };

    return (
        <div>
        <h3>{name}</h3>
        <p>Burned calories: {burnedCalories}</p>
        <p>Body part: {bodyPart}</p>
        <p>Target: {target}</p>
        {/* <button onClick={handleStartClick}>Start</button> */}
        </div>
    );
}