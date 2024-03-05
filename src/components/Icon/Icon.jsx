import sprite from '../../img/pulse-icons.svg';

import React from 'react';

export const Icon = ({ width, height, iconId }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};
