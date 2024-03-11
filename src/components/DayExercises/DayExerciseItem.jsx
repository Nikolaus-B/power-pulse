import React from 'react';

export const DayExerciseItem = ({ title, value }) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
};
