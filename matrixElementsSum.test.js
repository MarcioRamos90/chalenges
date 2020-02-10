const matrixElementsSum = require('./matrixElementsSum')

test.only('fsdfsd', () => {
  expect(matrixElementsSum([[0, 1, 1, 2]])).toBe(4)

  expect(
    matrixElementsSum([
      [0, 1, 1, 2],
      [1, 5, 0, 0]
    ])
  ).toBe(9)

  expect(
    matrixElementsSum([
      [0, 1, 1, 2],
      [0, 5, 0, 0],
      [2, 0, 3, 3]
    ])
  ).toBe(9)

  expect(
    matrixElementsSum([
      [1, 0, 3],
      [0, 2, 1],
      [1, 2, 0]
    ])
  ).toBe(5)
})
