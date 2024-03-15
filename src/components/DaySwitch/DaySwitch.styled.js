import { createGlobalStyle, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 11px;

  @media screen and (max-width: 767px) {
    gap: 0px;
  }
`;

export const Wrap = styled.div``;

export const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
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

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute !important;
    right: 50%;
    top: 50%;
    transform: translate(50px, 0%);
    display: flex !important;
    flex-direction: column;
    align-items: center;
    width: 215px;
    height: auto;
    padding: 14px;
    background-color: #ef8964 !important;
    font-family: inherit !important;
    border: none !important;
    border-radius: 8px !important;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964 !important;
  }
  .react-datepicker__day-names {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 0px !important;
    
    padding-top: 14px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);

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
    margin: 0 0 14px 0  !important;
    font-family: inherit;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 500 !important;
    letter-spacing: -0.02em;
    text-align: center;
    color: #efede8  !important;
  }
  .react-datepicker__day-name {
    align-self: start;
    width: 0 !important;
    margin: 0 1rem 0 0 !important;
    padding: 0;
    font-family: inherit;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 500 !important;
    text-align: center;
    line-height: normal !important;
    letter-spacing: -0.02em !important;
    color: rgba(239,237,232,0.5) !important;
  }
  .react-datepicker__navigation {
    margin-top: 16px;
    color: white;
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }

  .react-datepicker__navigation-icon {
    position: relative;
    top: -1px !important;
    font-size: 20px !important;
    width: 0 !important;
  }

  .react-datepicker__aria-live {
    display: none;
  }

  .react-datepicker__navigation-icon:before { 
    content: "";
    display: block;
    position: absolute;
    top: 6px !important;
    width: 6px !important;
    height: 6px !important;
    border-color: #efede8  !important;
    border-style: solid;
    border-width: 1px 1px 0 0 !important;
    transform: rotate(225deg);
  }

  .react-datepicker__navigation--previous {
    left: 7px !important;
    width: 18px !important;
    height: 18px !important;
  }
  .react-datepicker__navigation--next {
    right: 7px !important;
    width: 18px !important;
    height: 18px !important;
  }

   .react-datepicker__navigation-icon--next:before {
    left: -7px !important;
    transform: rotate(45deg);
  }

  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: rgba(239, 237, 232, 0.5);
    opacity: 50%;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #efede8  !important; 
  }
  .react-datepicker__day {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0 0.35rem 0 0.35rem !important;
    width: 16px !important;
    height: 18px !important;
    border-radius: 50%;
    color: #efede8  !important;
    font-family: inherit;
    font-size: 14px !important;;
    font-style: normal;
    font-weight: 400;
    line-height: 129% !important;
    letter-spacing: -0.02em;
    text-align: center;
    
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 11px;
    margin: 0 !important;
  }
  .react-datepicker__day--selected {
    width: 24px !important;
    height: 24px !important;
    border-radius: 50% !important;
    background-color: #040404  !important;
    color: #efede8  !important;
  }
  .react-datepicker__day--selected:hover {
    width: 24px !important;
    height: 24px !important; 
    border-radius: 50% !important;
  }
  .react-datepicker__day:hover {
    width: 24px !important;
    height: 24px !important;
    border-radius: 50% !important;
    background-color: #040404  !important;
    color: #efede8  !important;
  }
  .react-datepicker__day--keyboard-selected {
    width: 24px !important;
    height: 24px !important;
    border-radius: 50% !important;
    background-color: #040404  !important;
    color: #efede8  !important;
    
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



  .react-datepicker__day--disabled{
    color: rgba(239, 237, 232, 0.2) !important;

  }

  .react-datepicker__day--disabled:hover {
    color: rgba(239, 237, 232, 0.2) !important;
    background-color: transparent !important;
  }
  
`;
