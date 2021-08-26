import React, { FC } from 'react'
import { Container } from './styles'
import { NUMBERS } from '../../typings'
import Button from './button'

const NumberButtons: FC = () => {
  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((num) => (
        <Button key={num} value={num}>
          {num}
        </Button>
      ))}
    </Container>
  )
}

export default NumberButtons
