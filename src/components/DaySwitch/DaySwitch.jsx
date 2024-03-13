import React, { forwardRef, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, format, isBefore } from 'date-fns';

//------------------------------------------
import {
  Container,
  Wrapper,
  Wrap,
  Button,
  CalendarGlobalStyles,
  TitleWrapper,
} from './DaySwitch.styled';
import { Icon } from 'components/Icon/Icon';

//------------------------------------------
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/AuthHook';
import { clearData, setDate } from '../../redux/diary/diarySlice';

export const DaySwitch = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const calRef = useRef();
  const [startDate, setCurrentDate] = useState(new Date());

  const formatDate = notFormatedDate => {
    return notFormatedDate
      .toISOString()
      .split('T', 1)[0]
      .split('-')
      .reverse()
      .join('-');
  };

  const clearStore = () => dispatch(clearData());

  const goPrevDate = () => {
    clearStore();
    const day = new Date(startDate);
    const prevDay = new Date(day.setDate(day.getDate() - 1));
    setCurrentDate(prevDay);
    dispatch(setDate(formatDate(prevDay)));
  };

  const goNextDate = () => {
    clearStore();
    const day = new Date(startDate);
    const nextDay = new Date(day.setDate(day.getDate() + 1));
    setCurrentDate(nextDay);
    dispatch(setDate(formatDate(nextDay)));
  };

  const selectPickerDate = date => {
    clearStore();
    setCurrentDate(date);
    dispatch(setDate(formatDate(date)));
  };

  //------------------------------------------

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <Wrapper>
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(startDate, 'dd/MM/yyyy')}
        </TitleWrapper>
        <Icon iconid="datepicker-orng" width={24} height={24} />
      </Wrapper>
    );
  });

  return (
    <Container>
      <DatePicker
        ref={calRef}
        dateFormat={'dd MM yyyy'}
        showIcon={false}
        selected={startDate}
        shouldCloseOnSelect={true}
        minDate={new Date(user.createdAt)}
        maxDate={addDays(new Date(), 0)}
        onChange={date => selectPickerDate(date)}
        //------------------------------------
        customInput={<CustomInput />}
      />
      <Wrap>
        <Button onClick={() => goPrevDate()}>
          <Icon iconid="arrow-prev" width={24} height={24} />
        </Button>
        <Button onClick={() => goNextDate()}>
          <Icon iconid="arrow-next" width={24} height={24} />
        </Button>
      </Wrap>
      <CalendarGlobalStyles />
    </Container>
  );
};
