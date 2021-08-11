import { GRID } from '../../typings'
import { getRandomIndex, copyGrid } from '..'
import global from '../../global'

/**
 * removes numbers from a full grid to create a sodoku puzzle
 * @param grid : 9x9 sodoku grid;
 * @param attempts : number of attempts to solve (higher means more difficult)
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    // select random row and col
    let row = 0
    let col = 0

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }
    const backup = grid[row][col]
    grid[row][col] = 0

    // copy grid
    const gridCopy = copyGrid(grid)
    // set global counter
    global.counter = 0
    // attempt to solve the grid

    // if attempt was not successful, decrement counter
    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts--
    }
  }
  return grid
}

export default removeNumbers
