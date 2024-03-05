import { Icon } from '@iconify-icon/react';
import styled from 'styled-components';

export const DayDashboardContainer = styled.div``;

export const DashboardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 13px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-height: 248px;
    max-width: 593px;
    gap: 16px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    max-height: 593px;
    gap: 16px;
    margin-bottom: 48px;
  }
`;

export const NotificationContainer = styled.div`
  display: flex;
`;

export const NotificationIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  font-size: 24px;
  background-color: var(--orange_1-color);
  border-radius: 50px;
  color: var(--white-color);
`;

export const Notification = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-info-color);
`;
