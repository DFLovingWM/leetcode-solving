function shipWithinDays (weights, D) {
  let sum = 0,
      average = makeSum(weights, 0, weights.length) / D
  let result = -Infinity

  for (let i = 0; i < weights.length; ++i) {
    if (i + D === weights.length + 1) {
      result = Math.max(result, ...weights.slice(i))
      break
    }

    sum += weights[i]
    if (sum >= average) {
      
    }
  }

  return result
}

function makeSum (arr, left, right) {
  return arr.slice(left, right).reduce((acc, item) => acc + item, 0)
}