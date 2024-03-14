import styled from 'styled-components';
import sprite from '../../img/pulse-icons.svg';

const StyledIcon = styled.svg`
  &.disabled {
    fill: rgba(239, 237, 232, 0.2);
  }

  &.active {
    fill: #efede8;
  }
`;

export const DaySwichIcons = ({ turn, disabled }) => {
  return (
    <StyledIcon
      className={disabled ? 'disabled' : 'active'}
      width={16}
      height={16}
    >
      <use
        href={`${sprite}#${turn === 'next' ? 'diary-back' : 'diary-next'}`}
      ></use>
    </StyledIcon>
  );
};
