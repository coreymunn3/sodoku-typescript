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
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ solvedGrid, selectedBlock }) => ({
      value: solvedGrid?.[rowIndex]?.[colIndex],
      isActive:
        selectedBlock?.[0] === rowIndex && selectedBlock?.[1] === colIndex,
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
    >
      {state.value}
    </Container>
  )
}

export default Block
