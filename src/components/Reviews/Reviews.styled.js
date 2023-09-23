import { styled } from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
`;

export const AuthorName = styled.h4`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CommentText = styled.p`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: #777;
`;
