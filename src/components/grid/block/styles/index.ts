import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    background-color: ${theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    height: auto;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
