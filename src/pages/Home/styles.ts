import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.725rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['gray-100']};

    &:not(:disabled)hover {
      background-color: ${(props) => props.theme['green-700']};
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    cursor: pointer;
  }
`

export const StopCountdownButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.725rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background-color: ${(props) => props.theme['red-700']};
  }

  cursor: pointer;
`
