/**
 * Get a random index 0 - 8
 * @returns a random row or col index
 */
function getRandomIndex(): number {
  return Math.floor(Math.random() * 9)
}

export default getRandomIndex
