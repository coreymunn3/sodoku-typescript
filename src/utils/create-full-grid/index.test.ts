import createFullGrid from '.'

describe('create full grid', () => {
  it('returns a full 9x9 grid of valid sodoku puzzle', () => {
    const grid = createFullGrid()

    for (let row in grid) {
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
    }
  })
})
