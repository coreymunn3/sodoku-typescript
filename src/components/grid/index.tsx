import React, { FC } from 'react'
import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  // other stuff

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
