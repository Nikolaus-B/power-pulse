import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: inherit;
  margin-left: auto;

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 27px;
  font-family: Roboto, sans-serif;
  border: 1px solid #303030;
  border-radius: 12px;
  color: #efede8;
  transition: background-color 0.3s ease;
  font-size: 16px;

  &:hover {
    background-color: #e6533c;
    border: 1px solid transparent;
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-left: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const AvatarHeader = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--orange-color);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 37px;
    height: 37px;
  }
`;

export const Photo = styled.img`
  border-radius: 100px;
`;

export const LogOutBtn = styled.button`
  background-color: transparent;
  color: #efede8;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0;
`;
