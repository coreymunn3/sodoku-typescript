import { GRID, NUMBERS } from '../../typings'
import { shuffle, isInRow, isInCol } from '../index'

const gridExample = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking algorithm to check all the possible combinations of numbers until a soliton is found
 * @param grid 9x9 sodoku grid
 */
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)
      for (let value of numbers) {
        // make sure it's not in row already
        if (!isInRow({ grid, row, value })) {
          // make sure it's not in col already
          if (!isInCol({ grid, col, value })) {
            grid[row][col] = value
            // check if grid is full, stop and return true
            // otherwise we run fillGrid again
          }
        }
      }

      break
    }
  }
}

export default fillGrid
