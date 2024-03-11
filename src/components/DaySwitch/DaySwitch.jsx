import React, { forwardRef, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, format } from 'date-fns';

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
// import { fetchDiary } from '../../redux/diary/operations';
import { selectDate } from '../../redux/diary/diarySelectors';
import { useAuth } from '../hooks/AuthHook';
import { useSelector } from 'react-redux';

export const DaySwitch = () => {
  const { user } = useAuth();
  const selectedDate = useSelector(selectDate);
  const calRef = useRef();

  // const currentDate = new Date();
  // const selectedDate = Date.now();

  console.log(selectedDate);

  const [startDate, setCurrentDate] = useState(new Date());

  const goPrevDate = () => {
    setCurrentDate(prevDate => {
      const prevDay = new Date(prevDate);
      prevDay.setDate(prevDate.getDate() - 1);
      return prevDay;
    });
  };

  const goNextDate = () => {
    setCurrentDate(nextDate => {
      const nextDay = new Date(nextDate);
      nextDay.setDate(nextDate.getDate() + 1);
      return nextDay;
    });
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
        onChange={date => setCurrentDate(date)}
        //------------------------------------
        customInput={<CustomInput />}
      />
      <Wrap>
        <Button onClick={goPrevDate}>
          <Icon iconid="arrow-prev" width={24} height={24} />
        </Button>
        <Button onClick={goNextDate}>
          <Icon iconid="arrow-next" width={24} height={24} />
        </Button>
      </Wrap>
      <CalendarGlobalStyles />
    </Container>
  );
};
