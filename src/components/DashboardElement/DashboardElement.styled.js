import styled from 'styled-components';

const getColor = props =>
  props.$isOrange ? '--orange-color' : '--primary-black-color';

const getTextColor = props =>
  props.$isOrange ? '--diary-active-color' : '--text-categories-color';

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 157px;
  height: 96px;
  padding: 14px;
  background-color: var(${getColor});
  border: 1px solid var(--border-static-color);
  border-radius: 12px;
`;

export const IconAndTitleContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const DashboardTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(${getTextColor});
`;

export const Indicator = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
`;
