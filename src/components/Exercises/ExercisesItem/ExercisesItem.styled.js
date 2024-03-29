import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--border-static-color);
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  min-height: 141px;

  background-color: rgba(239, 237, 232, 0.05);
  @media screen and (min-width: 1440px) {
    min-width: 405px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
`;

export const WorkoutContainer = styled.div`
  border-radius: 4px;
  padding: 5px 7.5px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`;

export const Workout = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
`;

export const Button = styled.button`
  margin: 0; 
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 18px;
  padding: 0px;
  background-color: inherit;
  border: none;
  font-size: 14px;
  color: var(--orange-color);
`;

export const StartWrap = styled.div`
  width: 16px;
  height: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;

export const IconWrap = styled.div`
  width: 24px;
  height: 24px;
`;

export const TitleText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: var(--white-color);
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px ;
  white-space: nowrap;
`;

export const Text = styled.span`
  
  color: var(--white-color);
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DarkText = styled.p`
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
`;