import { FC } from 'react'
import { IReducer } from '../../../reducers'
import { N, INDEX } from '../../../typings'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { ISelectBlock } from '../../../reducers'
import { selectBlock } from '../../../reducers'
import { Container } from './styles'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  value: N
  isActive: boolean
  isPuzzle: boolean
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock, challengeGrid }) => ({
      value: workingGrid?.[rowIndex]?.[colIndex],
      isActive:
        selectedBlock?.[0] === rowIndex && selectedBlock?.[1] === colIndex,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
    })
  )
  const dispatch = useDispatch<Dispatch<ISelectBlock>>()

  const handleSelectBlock = () => {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, colIndex]))
    }
  }
  return (
    <Container
      isActive={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleSelectBlock}
      isPuzzle={state.isPuzzle}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
