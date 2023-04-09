import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const InputProjecName = styled.input`
  flex: 1; //comando para que o elemento ocupe o maximo de espaco possivel para se adequar ao container
  background-color: transparent;
  width: 14.5rem;
  border-right: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.1rem 0.5rem;
  color: ${(props) => props.theme['gray-300']};

  &:focus {
    box-shadow: none;
  }

  ::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const InputTime = styled.input`
  background-color: transparent;
  width: 4rem;
  border-right: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.1rem 0.5rem;
  color: ${(props) => props.theme['gray-300']};
  &:focus {
    box-shadow: none;
  }

  ::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`
