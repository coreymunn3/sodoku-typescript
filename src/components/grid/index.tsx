import React, { FC, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import {
  createGrid,
  fillBlock,
  IReducer,
  selectBlock,
  ISelectBlock,
} from '../../reducers'
import { BLOCK_COORDS, INDEX, N, NUMBERS } from '../../typings'
import Block from './block'
import { Container, Row } from './styles'
import useMousetrap from 'react-hook-mousetrap'

interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue?: N
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  )
  const selectedRowIdx: INDEX = state?.selectedBlock?.[0] ?? 0
  const selectedColIdx: INDEX = state?.selectedBlock?.[1] ?? 0
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0) {
        dispatch(fillBlock(n, state.selectedBlock))
      }
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  )

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
  useMousetrap('1', () => fill(1))
  useMousetrap('2', () => fill(2))
  useMousetrap('3', () => fill(3))
  useMousetrap('4', () => fill(4))
  useMousetrap('5', () => fill(5))
  useMousetrap('6', () => fill(6))
  useMousetrap('7', () => fill(7))
  useMousetrap('8', () => fill(8))
  useMousetrap('9', () => fill(9))

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
