import { NUMBERS, SQUARE } from '../../../typings'

interface IInput {
  square: SQUARE
  value: NUMBERS
}

function isInSquare({ square, value }: IInput): Boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
