import { DashboardElement } from 'components/DashboardElement/DashboardElement';
import React from 'react';
import {
  DashboardList,
  DayDashboardContainer,
  Notification,
  NotificationContainer,
  NotificationIcon,
} from './DayDashboard.styled';

export const DayDashboard = () => {
  return (
    <DayDashboardContainer>
      <DashboardList>
        <DashboardElement
          isOrange={true}
          name={'Daily calorie intake'}
          text={'2200'}
          icon={'fluent:food-24-filled'}
        />

        <DashboardElement
          isOrange={true}
          name={'Daily physical activity'}
          text={'110 min'}
          icon={'fa-solid:dumbbell'}
        />
        <DashboardElement
          name={'Сalories consumed'}
          text={'707'}
          icon={'fluent:food-apple-20-filled'}
        />

        <DashboardElement
          name={'Сalories burned'}
          text={'855'}
          icon={'material-symbols-light:local-fire-department'}
        />
        <DashboardElement
          name={'Calories remaining'}
          text={'1443'}
          icon={'tabler:chart-bubble-filled'}
        />
        <DashboardElement
          name={'Sports remaining'}
          text={'85 min'}
          icon={'fa-solid:running'}
        />
      </DashboardList>
      <NotificationContainer>
        <NotificationIcon icon="arcticons:symbol-exclamation-mark" />
        <Notification>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices
        </Notification>
      </NotificationContainer>
    </DayDashboardContainer>
  );
};
