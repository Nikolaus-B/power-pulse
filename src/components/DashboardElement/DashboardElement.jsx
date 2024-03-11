import React from 'react';
import {
  Dashboard,
  DashboardTitle,
  IconAndTitleContainer,
  Indicator,
} from './DashboardElement.styled';
import { Icon } from 'components/Icon/Icon';

export const DashboardElement = ({ name, icon, text, isOrange, exceeded }) => {
  const exceededParams = exceeded => {
    if (exceeded === undefined) {
      return;
    } else if (exceeded[0] === 'calories' && exceeded[1] < 0) {
      return 'too-much-calories';
    } else if (exceeded[0] === 'sports' && exceeded[1].includes('+')) {
      return 'good-training';
    }
  };

  return (
    <Dashboard $isOrange={isOrange} className={exceededParams(exceeded)}>
      <IconAndTitleContainer>
        <Icon height={20} width={20} iconid={icon} />

        <DashboardTitle $isOrange={isOrange}>{name}</DashboardTitle>
      </IconAndTitleContainer>
      <Indicator>{text}</Indicator>
    </Dashboard>
  );
};
