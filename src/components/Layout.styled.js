import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #333;
  color: white;
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1rem 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  padding-top: 30px;
  padding-bottom: 10px;
  color: #c0c0c0;
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 350ms color, font-weight ease-in;

  &:hover {
    font-weight: 600;
    color: #a9a9a9;
  }

  &.active {
    font-weight: 600;
    color: #a9a9a9;

    &::after {
      position: absolute;
      bottom: 0;
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      background-color: #a9a9a9;
      border-radius: 2px;
    }
  }
`;
