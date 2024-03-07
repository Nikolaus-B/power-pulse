import React from 'react';
import {
  Dashboard,
  DashboardTitle,
  IconAndTitleContainer,
  Indicator,
} from './DashboardElement.styled';
import { Icon } from 'components/Icon/Icon';

export const DashboardElement = ({ name, icon, text, isOrange }) => {
  return (
    <Dashboard $isOrange={isOrange}>
      <IconAndTitleContainer>
        <Icon height={20} width={20} iconid={icon} />

        <DashboardTitle $isOrange={isOrange}>{name}</DashboardTitle>
      </IconAndTitleContainer>
      <Indicator>{text}</Indicator>
    </Dashboard>
  );
};
