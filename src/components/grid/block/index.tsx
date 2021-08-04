import React, { FC } from 'react'
import { IReducer } from '../../../reducers'
import { N } from '../../../typings'
import { useSelector } from 'react-redux'
import { Container } from './styles'

interface IProps {
  colIndex: number
  rowIndex: number
}

interface IState {
  value: N
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ solvedGrid }) => ({
    value: solvedGrid?.[rowIndex]?.[colIndex],
  }))
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {state.value}
    </Container>
  )
}

export default Block
