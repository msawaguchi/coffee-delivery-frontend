import styled from 'styled-components'

export const HeaderDescriptionContainer = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-weight: 800;
    font-size: 40px;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 16px;
  }

  @media (max-width: 668px) {
    height: auto;
  }
`

export const HeaderHighlights = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 668px) {
    flex-direction: column;
  }
`

type HighlightVariant = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'

interface HighlightProps {
  variant: HighlightVariant
}

export const HeaderItemHighlight = styled.div<HighlightProps>`
  display: flex;
  flex-direction: row;

  font-size: 16px;
  align-items: center;
  color: ${(props) => props.theme['base-text']};

  svg {
    background-color: ${(props) => props.theme[props.variant]};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    padding: 6px;
    margin-right: 12px;
  }

  &:first-child {
    margin: 20px 0px;
  }
`
