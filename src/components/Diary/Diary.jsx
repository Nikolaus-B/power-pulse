import { Title } from 'components/Title/Title';
import React, { useEffect } from 'react';
import { DayProducts } from 'components/DayProducts/DayProducts';
import { DayExercises } from 'components/DayExercises/DayExercises';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import {
  ProductAndExercises,
  DiaryContainer,
  TitleContainer,
  DashboardContainer,
} from './Diary.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../../redux/diary/diarySelectors';
import { fetchDiary } from '../../redux/diary/operations';
import { useMedia } from 'use-media';
import { DaySwitch } from 'components/DaySwitch/DaySwitch';

export const Diary = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const isWide = useMedia({ minWidth: '767px' });

  useEffect(() => {
    dispatch(fetchDiary(date));
  }, [dispatch, date]);

  return (
    <DiaryContainer className="container">
      <TitleContainer>
        <Title title={'Diary'} />
        <DaySwitch media={isWide} />
      </TitleContainer>
      <DashboardContainer>
        <ProductAndExercises>
          <DayProducts media={isWide} />
          <DayExercises media={isWide} />
        </ProductAndExercises>
        <DayDashboard />
      </DashboardContainer>
    </DiaryContainer>
  );
};
