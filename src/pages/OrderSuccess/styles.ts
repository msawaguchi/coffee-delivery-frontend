import styled from 'styled-components'

export const SuccessMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 32px;

  img {
    width: auto;
    height: fit-content;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    h2 {
      margin-top: 16px;
      color: ${(props) => props.theme['yellow-dark']};
    }

    section {
      display: flex;
      height: 270px;
      max-width: 526px;
      flex-direction: column;
      padding: 32px;
      margin-top: 32px;
      border-radius: 6px 36px 6px 36px;
      justify-content: space-between;
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
  }
`

type SummaryInfoVariant = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'

interface SummaryInfoProps {
  variant: SummaryInfoVariant
}

export const SummaryInfo = styled.div<SummaryInfoProps>`
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

  div {
    display: flex;
    flex-direction: column;
  }
`
