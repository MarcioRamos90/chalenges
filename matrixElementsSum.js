function matrixElementsSum(matrix) {
  let sum = 0
  let indexesToAvoid = []
  for (let index = 0; index < matrix.length; index++) {
    if (index === 0) {
      sum += arrayElementsSum(matrix[index], [])
    } else {
      indexesToAvoid = [...indexesToAvoid, ...matrix[index - 1].map((item, indexMap) => {
        if (item === 0) return indexMap
      }, [])]
      sum += arrayElementsSum(matrix[index], [...new Set(indexesToAvoid)])
    }
  }
  return sum
}

function arrayElementsSum(array, indexesToAvoid = []) {
  let sum = 0
  for (let index = 0; index < array.length; index++) {
    if (!indexesToAvoid.includes(index)) {
      sum += array[index]
    }
  }
  return sum
}

module.exports = matrixElementsSum
