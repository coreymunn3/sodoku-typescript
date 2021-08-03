import React, { FC, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { createGrid } from '../../reducers'
import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  useEffect(() => {
    create()
  }, [create])

  return (
    <Container>
      {React.Children.toArray(
        [...Array(9)].map((_, rowIdx) => (
          <Row>
            {React.Children.toArray(
              [...Array(9)].map((_, colIdx) => (
                <Block rowIndex={rowIdx} colIndex={colIdx}></Block>
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
