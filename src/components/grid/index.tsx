import React, { FC, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { createGrid, IReducer, selectBlock, ISelectBlock } from '../../reducers'
import { BLOCK_COORDS, INDEX } from '../../typings'
import Block from './block'
import { Container, Row } from './styles'
import useMousetrap from 'react-hook-mousetrap'

interface IState {
  selectedBlock?: BLOCK_COORDS
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock,
  }))
  const selectedRowIdx: INDEX = state?.selectedBlock?.[0] ?? 0
  const selectedColIdx: INDEX = state?.selectedBlock?.[1] ?? 0
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  useEffect(() => {
    create()
  }, [create])

  const moveUp = () => {
    if (state.selectedBlock && selectedRowIdx > 0) {
      dispatch(selectBlock([(selectedRowIdx - 1) as INDEX, selectedColIdx]))
    }
  }
  const moveDown = () => {
    if (state.selectedBlock && selectedRowIdx < 8) {
      dispatch(selectBlock([(selectedRowIdx + 1) as INDEX, selectedColIdx]))
    }
  }
  const moveLeft = () => {
    if (state.selectedBlock && selectedColIdx > 0) {
      dispatch(selectBlock([selectedRowIdx, (selectedColIdx - 1) as INDEX]))
    }
  }
  const moveRight = () => {
    if (state.selectedBlock && selectedColIdx < 8) {
      dispatch(selectBlock([selectedRowIdx, (selectedColIdx + 1) as INDEX]))
    }
  }

  useMousetrap('down', moveDown)
  useMousetrap('left', moveLeft)
  useMousetrap('right', moveRight)
  useMousetrap('up', moveUp)

  return (
    <Container>
      {React.Children.toArray(
        [...Array(9)].map((_, rowIdx) => (
          <Row>
            {React.Children.toArray(
              [...Array(9)].map((_, colIdx) => (
                <Block
                  rowIndex={rowIdx as INDEX}
                  colIndex={colIdx as INDEX}
                ></Block>
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
