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
  width: 335px;
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
    font-size: 16px;
    line-height: 24px;
  }
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
  max-width: 303px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--text-info-color);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 561px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 358px;
    font-size: 16px;
    line-height: 24px;
  }
`;
