/**
 * An array shuffling function using the Fisher-Yates shuffle algorithm
 * @param array an Array that you want shuffled
 */

function shuffle(array: any[]) {
  let temp
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * array.length)
    // ;[array[i], array[j]] = [array[j], array[i]]
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export default shuffle

// Taken from
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
