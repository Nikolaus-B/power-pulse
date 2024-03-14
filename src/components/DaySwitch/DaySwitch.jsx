import React, { forwardRef, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, format, isAfter, isBefore } from 'date-fns';

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
import { useAuth } from '../hooks/AuthHook';
import { useDispatch } from 'react-redux';
import { setDate } from '../../redux/diary/diarySlice';

export const DaySwitch = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const tomorrow = new Date().setDate(new Date().getDate() - 1);
  const calRef = useRef();
  const registrationDate = new Date(user.createdAt);
  const [startDate, setCurrentDate] = useState(new Date());

  const changeDate = date => {
    console.log(date);
    const fotmatedDate = date
      .toISOString()
      .split('T', 1)[0]
      .split('-')
      .reverse()
      .join('-');
    dispatch(setDate(fotmatedDate));
  };

  const goPrevDate = () => {
    if (!isBefore(startDate, registrationDate)) {
      setCurrentDate(prevDate => {
        const prevDay = new Date(prevDate);
        prevDay.setDate(prevDate.getDate() - 1);
        return prevDay;
      });
      changeDate(new Date(startDate.setDate(startDate.getDate() - 1)));
    }
  };

  const goNextDate = () => {
    if (!isAfter(startDate, tomorrow)) {
      setCurrentDate(nextDate => {
        const nextDay = new Date(nextDate);
        nextDay.setDate(nextDate.getDate() + 1);
        return nextDay;
      });
    }
  };

  const changeInputDate = date => {
    setCurrentDate(date);
    changeDate(date);
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
        onChange={date => changeInputDate(date)}
        calendarStartDay={1}
        formatWeekDay={day => day.substring(0, 2)}
        placeholderText="Weeks start on Monday"
        //------------------------------------
        customInput={<CustomInput />}
      />
      <Wrap>
        <Button onClick={goPrevDate}>prev</Button>
        <Button onClick={goNextDate}>next</Button>
      </Wrap>
      <CalendarGlobalStyles />
    </Container>
  );
};
