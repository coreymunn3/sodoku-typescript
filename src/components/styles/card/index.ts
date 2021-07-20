import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex: 1;
    border-radius: 15px;
    flex-direction: column;
    max-height: fit-content;
    padding: 15px;
  `}
`
