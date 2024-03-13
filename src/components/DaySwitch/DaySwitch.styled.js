import { createGlobalStyle, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 8px;
`;

export const Wrap = styled.div``;

export const Button = styled.button`
  /* background-color: transparent;
  border-color: transparent; */
  width: 24px;
  height: 24px;
`;

export const TitleWrapper = styled.button`
  width: 129px;
  padding: 0;
  color: #efede8;
  background: transparent;
  font-size: 24px;
  font-weight: 700;
  line-height: 133%;
  text-align: center;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  border: none;
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
    background-color: #ef8964;
    border: none;

  }
  .react-datepicker {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0px;
    transform: translate(0%, 0%);
    border-radius: 8px;
  
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
    background-color: #ef8964;
  }
  .react-datepicker__header {
    position: relative;
    
    background-color: #ef8964;
  }
  .react-datepicker__day-names {
    display: flex;
    align-items: center;
    background-color: #ef8964; 
    gap: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}

  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: center;
    color: #efede8;
    background-color: transparent; 
    margin: 0;
    
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: #efede8;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: #efede8;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: white;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
    
  }
  .react-datepicker__day--selected {
    background-color:#040404;
    color:#3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;
