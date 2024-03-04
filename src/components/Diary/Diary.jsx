import { Title } from 'components/Title/Title';
import React from 'react';

import { DaySwitch } from 'components/DaySwitch/DaySwitch';
import { DayProducts } from 'components/DayProducts/DayProducts';
import { DayExercises } from 'components/DayExercises/DayExercises';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import {
  ProductAndExercises,
  DiaryContainer,
  TitleContainer,
  DashboardContainer,
} from './Diary.styled';

export const Diary = () => {
  return (
    <DiaryContainer className="container">
      <TitleContainer>
        <Title title={'Diary'} />
        <DaySwitch />
      </TitleContainer>
      <DashboardContainer>
        <ProductAndExercises>
          <DayProducts />
          <DayExercises />
        </ProductAndExercises>
        <DayDashboard />
      </DashboardContainer>
    </DiaryContainer>
  );
};
