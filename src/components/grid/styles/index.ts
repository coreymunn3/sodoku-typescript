import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    &:first-child {
      border-top: solid 4px ${theme.colors.black};
    }

    &:last-child {
      border-bottom: solid 4px ${theme.colors.black};
    }

    &:nth-child(3),
    :nth-child(6) {
      border-bottom: solid 3px ${theme.colors.black};
    }
  `}
`
