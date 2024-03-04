import React from 'react';
import {
  Dashboard,
  DashboardTitle,
  IconAndTitleContainer,
  Indicator,
} from './DashboardElement.styled';

export const DashboardElement = ({ name, icon, text, isOrange }) => {
  return (
    <Dashboard $isOrange={isOrange}>
      <IconAndTitleContainer>
        <p>i</p>
        <DashboardTitle $isOrange={isOrange}>{name}</DashboardTitle>
      </IconAndTitleContainer>
      <Indicator>{text}</Indicator>
    </Dashboard>
  );
};
