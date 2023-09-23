import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const CastItem = styled.li`
  flex-basis: calc(100% - 40px * 3) / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
`;

export const CastImage = styled.img`
  width: 200px;
  border-radius: 30%;
`;

export const CastDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CastName = styled.p`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

export const CastCharacter = styled.p`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: #777;
`;

export const Text = styled.p`
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;
