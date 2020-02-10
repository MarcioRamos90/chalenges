function almostIncreasingSequence(sequence) {
  if (!sequence.length) return false
  if (sequence.length <= 2) return true
  let countErrors = 0
  function verify(currentSequence) {
    for (let index = 1; index < currentSequence.length; index++) {
      const prevIsBiggerThanTheCurrent = currentSequence[index - 1] >= currentSequence[index]
      if (prevIsBiggerThanTheCurrent && countErrors === 0) {
        countErrors++
        const nextSequence = [
          ...currentSequence.slice(0, index - 1),
          ...currentSequence.slice(index, currentSequence.length)
        ]
        const nextSequence2 = [
          ...currentSequence.slice(0, index),
          ...currentSequence.slice(index + 1, currentSequence.length)
        ]
        return verify(nextSequence) || verify(nextSequence2)
      } else if (prevIsBiggerThanTheCurrent && countErrors > 0) {
        return false
      }
    }
    return true
  }
  return verify(sequence)
}

module.exports = almostIncreasingSequence
