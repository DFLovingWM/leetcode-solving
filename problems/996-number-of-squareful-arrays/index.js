let count

/**
 * Wrong: recursively get next permutation and judge if squareful.(Slow)
 * Right: recursively and squarefully build next permutation.(Efficient)
 */
function numSquarefulPerms (arr) {
  count = 0
  recursive(arr)
  return count
}

function recursive (restArr, lastNumber) {
  if (restArr.length === 0) {
    ++count
    return
  }

  let visited = new Map()
  for (let i = 0; i < restArr.length; ++i) {
    const num = restArr[i]
    if (
      (typeof lastNumber === 'undefined' || isSumSquareful(lastNumber, restArr[i])) &&
      !visited.has(num)
    ) {
      recursive(
        [...restArr.slice(0, i), ...restArr.slice(i + 1)],
        num
      )
      visited.set(num, true)
    }
  }
}

function isSumSquareful (x, y) {
  let sum = x + y
  let base = Math.floor(Math.sqrt(sum))
  return base * base === sum
}

// module.exports = numSquarefulPerms