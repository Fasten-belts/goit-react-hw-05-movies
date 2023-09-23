import { styled } from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const InputField = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;

export const SubmitButton = styled.button`
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

  &:hover {
    background-image: linear-gradient(-180deg, #f0f0f0 0%, #c0c0c0 100%);
  }
`;
