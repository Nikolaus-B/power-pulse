import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { format, addDays } from 'date-fns';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useAuth } from 'components/hooks/AuthHook';

import { CalendarGlobalStyles, TitleWrapper } from './StyledDatepicker.styled';

const StyledDatepicker = () => {
  const { user } = useAuth();
  const { selectedDate, setSelectedDate } = useSelector();

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd-MM-yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        showIcon={false}
        dateFormat={'dd MM yyyy'}
        selected={user.birthday}
        calendarStartDay={1}
        minDate={new Date(user.createdAt)}
        maxDate={addDays(new Date(), 0)}
        // formatWeekDay={day => day.substr(0, 1)}
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
