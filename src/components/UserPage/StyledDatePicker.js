import { forwardRef, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useAuth } from 'components/hooks/AuthHook';

import {
  CalendarGlobalStyles,
  TitleWrapper,
} from './styles/StyledDatepicker.styled';

import { format } from 'date-fns';
import { Button } from '@chakra-ui/react';
import { Icon } from 'components/Icon/Icon';

const StyledDatepicker = () => {
  const { user } = useAuth();
  const calRef = useRef();
  const [selectedDate, setSelectedDate] = useState(user.birthday);

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper
        as={Button}
        justifyContent="space-between"
        type="button"
        onClick={onClick}
        ref={ref}
        rightIcon={<Icon iconid={'date-picker'} width={24} height={24} />}
        variant="outline"
      >
        {format(selectedDate, 'dd.MM.yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        ref={calRef}
        showIcon={false}
        dateFormat={'dd.MM.yyyy'}
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        calendarStartDay={1}
        formatWeekDay={day => day.substring(0, 2)}
        placeholderText="Weeks start on Monday"
        customInput={<CustomInput />}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
