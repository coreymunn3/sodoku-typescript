/**
 * An array shuffling function using the Fisher-Yates shuffle algorithm
 * @param array an Array that you want shuffled
 */

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * array.length)
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle
