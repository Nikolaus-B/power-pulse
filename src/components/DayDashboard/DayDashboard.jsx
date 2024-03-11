import { DashboardElement } from 'components/DashboardElement/DashboardElement';
import React from 'react';
import {
  DashboardList,
  DayDashboardContainer,
  Notification,
  NotificationContainer,
} from './DayDashboard.styled';
import { Icon } from 'components/Icon/Icon';
import { useSelector } from 'react-redux';
import {
  selectBMR,
  selectDailyRateSports,
} from '../../redux/user/userSelectors';
import {
  selectCaloriesBurned,
  selectCaloriesConsumed,
  selectCaloriesRemaining,
  selectSportRemaining,
} from '../../redux/diary/diarySelectors';

export const DayDashboard = () => {
  const dailyRateSports = useSelector(selectDailyRateSports);
  const bmr = useSelector(selectBMR);
  const caloriesConsumed = useSelector(selectCaloriesConsumed);
  const caloriesBurned = useSelector(selectCaloriesBurned);
  const caloriesRemaining = useSelector(selectCaloriesRemaining);
  const sportRemaining = useSelector(selectSportRemaining);

  return (
    <DayDashboardContainer>
      <DashboardList>
        <DashboardElement
          isOrange={true}
          name={'Daily calorie intake'}
          text={bmr || 2200}
          icon={'food'}
        />

        <DashboardElement
          isOrange={true}
          name={'Daily physical activity'}
          text={`${dailyRateSports || 110} min`}
          icon={'dumbbell'}
        />
        <DashboardElement
          name={'Calories consumed'}
          text={caloriesConsumed}
          icon={'apple'}
        />

        <DashboardElement
          name={'Calories burned'}
          text={caloriesBurned}
          icon={'fire'}
        />
        <DashboardElement
          name={'Calories remaining'}
          text={caloriesRemaining}
          icon={'bubble'}
          exceeded={['calories', caloriesRemaining]}
        />
        <DashboardElement
          name={'Sports remaining'}
          text={`${sportRemaining} min`}
          icon={'running-man'}
          exceeded={['sports', sportRemaining]}
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
