import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px;
  padding: 15px;
`;

export const BackButton = styled(Link)`
  background-image: linear-gradient(-180deg, #a9a9a9 0%, #404040 100%);
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #c0c0c0;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: 600;
  width: 200px;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 20px;

  &:hover {
    background-image: linear-gradient(-180deg, #f0f0f0 0%, #c0c0c0 100%);
  }
`;

export const LinkStyled = styled(Link)`
  background-image: linear-gradient(-180deg, #a9a9a9 0%, #404040 100%);
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #000;
  border: 0;
  color: #c0c0c0;
  cursor: pointer;
  display: block;
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 15px;
  position: relative;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    font-weight: 800;
  }
  &:active {
    font-weight: 800;
  }
`;

export const AdditionalInfo = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
`;

export const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const InfoItem = styled.li`
  margin: 20px;
`;
