import React from 'react';
import {
  Dashboard,
  DashboardIcon,
  DashboardTitle,
  IconAndTitleContainer,
  Indicator,
} from './DashboardElement.styled';

export const DashboardElement = ({ name, icon, text, isOrange }) => {
  return (
    <Dashboard $isOrange={isOrange}>
      <IconAndTitleContainer>
        <DashboardIcon icon={icon} height={20} width={20} />
        <DashboardTitle $isOrange={isOrange}>{name}</DashboardTitle>
      </IconAndTitleContainer>
      <Indicator>{text}</Indicator>
    </Dashboard>
  );
};
