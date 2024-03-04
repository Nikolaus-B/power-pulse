import { DashboardElement } from 'components/DashboardElement/DashboardElement';
import React from 'react';
import {
  DashboardList,
  DayDashboardContainer,
  Notification,
  NotificationContainer,
} from './DayDashboard.styled';

export const DayDashboard = () => {
  return (
    <DayDashboardContainer>
      <DashboardList>
        <DashboardElement
          isOrange={true}
          name={'Daily calorie intake'}
          text={'2200'}
        />
        <DashboardElement
          isOrange={true}
          name={'Daily physical activity'}
          text={'110 min'}
        />
        <DashboardElement name={'Сalories consumed'} text={'707'} />
        <DashboardElement name={'Сalories burned'} text={'855'} />
        <DashboardElement name={'Calories remaining'} text={'1443'} />
        <DashboardElement name={'Sports remaining'} text={'85 min'} />
      </DashboardList>
      <NotificationContainer>
        <p>ic</p>
        <Notification>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices
        </Notification>
      </NotificationContainer>
    </DayDashboardContainer>
  );
};
