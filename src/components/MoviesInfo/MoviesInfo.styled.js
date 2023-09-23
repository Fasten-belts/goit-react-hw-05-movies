import { styled } from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  gap: 20px;
`;

export const MoviePoster = styled.img`
  width: 250px;
  height: auto;
`;

export const MovieTitle = styled.h2`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const MovieRating = styled.p`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  margin: 5px 0;
`;

export const MovieOverview = styled.h3`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 20px;
  margin-top: 10px;
`;

export const MovieOverviewText = styled.p`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 16px;
`;

export const MovieGenres = styled.h3`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 20px;
  margin-top: 10px;
`;

export const MovieGenreList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MovieGenreItem = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
`;
