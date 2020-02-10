function sortByHeight(a) {
  const arraySorted = []
  const peoples = a
    .filter(value => value >= 0)
    .sort((a, b) => (a === b ? 0 : a > b ? 1 : -1))
  for (let index = 0; index < a.length; index++) {
    if (a[index] < 0) {
      arraySorted.push(-1)
    } else {
        arraySorted.push(peoples.shift())
    }
  }
  return arraySorted
}

module.exports = sortByHeight
