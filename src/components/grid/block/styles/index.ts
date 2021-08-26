import styled, { css } from 'styled-components'

interface IProps {
  isActive?: boolean
  isPuzzle?: boolean
}

export const Container = styled.div<IProps>`
  ${({ isActive, isPuzzle, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    background-color: ${isActive ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    font-weight: ${isPuzzle ? 'bold' : 'normal'};
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

    &:first-child {
      border-left: solid 4px ${theme.colors.black};
    }

    &:last-child {
      border-right: solid 4px ${theme.colors.black};
    }

    &:nth-child(3),
    :nth-child(6) {
      border-right: solid 3px ${theme.colors.black};
    }
  `}
`
