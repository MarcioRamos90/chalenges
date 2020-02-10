function isLucky(n) {
  const size = n.length
  const firstHalf = n
    .split('')
    .slice(0, size / 2)
    .reduce((prev, cur) => Number(prev) + Number(cur), 0)
  const secondHalf = n
    .split('')
    .slice(size / 2, size)
    .reduce((prev, cur) => Number(prev) + Number(cur), 0)
  return firstHalf === secondHalf
}

module.exports = isLucky
