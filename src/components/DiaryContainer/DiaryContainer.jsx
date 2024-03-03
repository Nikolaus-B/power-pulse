import { Title } from 'components/Title/Title';
import React from 'react';
import { DiaryContainerStyled } from './DiaryContainer.styled';

export const DiaryContainer = () => {
  return (
    <DiaryContainerStyled className="container">
      <Title title={'Diary'} />
    </DiaryContainerStyled>
  );
};
