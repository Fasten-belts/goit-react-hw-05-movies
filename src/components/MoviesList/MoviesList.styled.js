import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MovieListItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #c0c0c0;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #a9a9a9;
  }
`;
