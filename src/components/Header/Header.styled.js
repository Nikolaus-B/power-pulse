import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #303030;
  padding: 12px 20px;
  @media (min-width: 768px) {
    padding: 19px 32px;
  }
  @media (min-width: 1440px) {
    padding: 19px 96px;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 335px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 704px;
  }
  @media (min-width: 1440px) {
    max-width: 1248px;
  }
`;

export const LogoLink = styled(NavLink)`
  margin-right: auto;
  @media (min-width: 768px) {
    svg {
      width: 152px;
      height: 17px;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavBtn = styled.button`
  display: flex;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    svg {
      width: 18px;
      height: 12px;
      stroke: #e6533c;
    }
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    svg {
      width: 24px;
      height: 16px;
      stroke: #e6533c;
    }
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 32px;
    height: 32px;
  }
`;