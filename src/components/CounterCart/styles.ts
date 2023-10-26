import styled from 'styled-components'

export const CounterCartContainer = styled.div`
  width: 72px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 6px;

  button {
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    font-size: 20px;
    width: 26px;
    height: 32px;
    padding: 0 6px;
    border-radius: 6px;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
      transition: background-color 500ms;
    }
  }

  label {
    color: ${(props) => props.theme['base-title']};
    padding: 0 6px;
  }
`
