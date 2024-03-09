import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border-bottom: 1px solid #303030;
  padding: 20px 96px;
  
  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (max-width: 1440px) {
    padding: 20px 32px;
  }

  ${props =>
    props.showBottomBorder ? 'border-bottom: 1px solid #303030;' : ''}
`;

export const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavBtn = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;

  @media (max-width: 768px) {
    width: 24px;
`;
