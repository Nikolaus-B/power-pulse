import { DashboardElement } from 'components/DashboardElement/DashboardElement';
import React from 'react';
import {
  DashboardList,
  DayDashboardContainer,
  Notification,
  NotificationContainer,
} from './DayDashboard.styled';
import { Icon } from 'components/Icon/Icon';

export const DayDashboard = () => {
  return (
    <DayDashboardContainer>
      <DashboardList>
        <DashboardElement
          isOrange={true}
          name={'Daily calorie intake'}
          text={'2200'}
          icon={'food'}
        />

        <DashboardElement
          isOrange={true}
          name={'Daily physical activity'}
          text={'110 min'}
          icon={'dumbbell'}
        />
        <DashboardElement
          name={'Сalories consumed'}
          text={'707'}
          icon={'apple'}
        />

        <DashboardElement name={'Сalories burned'} text={'855'} icon={'fire'} />
        <DashboardElement
          name={'Calories remaining'}
          text={'1443'}
          icon={'bubble'}
        />
        <DashboardElement
          name={'Sports remaining'}
          text={'85 min'}
          icon={'running-man'}
        />
      </DashboardList>
      <NotificationContainer>
        <Icon width={24} height={24} iconid={'warning'} />
        <Notification>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices
        </Notification>
      </NotificationContainer>
    </DayDashboardContainer>
  );
};
