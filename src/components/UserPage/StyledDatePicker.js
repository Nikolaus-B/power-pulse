import { forwardRef, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// import { useAuth } from 'components/hooks/AuthHook';

import {
  CalendarGlobalStyles,
  TitleWrapper,
} from './styles/StyledDatepicker.styled';

import { format } from 'date-fns';

const StyledDatepicker = () => {
  // const { user } = useAuth();
  const calRef = useRef();
  const { selectedDate, setSelectedDate } = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper type="button" onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        ref={calRef}
        showIcon={false}
        dateFormat={'dd/MM/yyyy'}
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
