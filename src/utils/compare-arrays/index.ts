/**
 * Compares 2 arrays of any dimensions recursively, returns true if equal, false otherwise
 * @param arr1 first array
 * @param arr2 second array
 */

function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2

  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (!compareArrays(arr1[i], arr2[i])) return false
  }
  return true
}

export default compareArrays
