let maxs = []
let average

function shipWithinDays (weights, D) {
  average = Math.ceil(sum(weights, 0, weights.length) / D)
  cut(weights, 0, D - 1, [])
  return Math.min(...maxs)
}

function cut (weights, startIndex, remain, piles) {
  if (startIndex >= weights.length || weights.length - 1 - startIndex < remain) return

  if (remain === 0) {
    piles = piles.concat(sum(weights, startIndex, weights.length))
    // console.log(piles)
    let max = Math.max(...piles)
    maxs.push(max)
    return
  }

  let tmpSum = 0
  for (let i = startIndex; i < weights.length; ++i) {
    tmpSum += weights[i]
    if (tmpSum === average) {
      cut(weights, i, remain - 1, piles.concat(tmpSum - weights[i]))
      cut(weights, i + 1, remain - 1, piles.concat(tmpSum))
      cut(weights, i + 2, remain - 1, piles.concat(tmpSum + weights[i + 1]))
      break
    }
    if (tmpSum > average) {
      cut(weights, i, remain - 1, piles.concat(tmpSum - weights[i]))
      cut(weights, i + 1, remain - 1, piles.concat(tmpSum))
      break
    }
  }
}

function sum (weights, startIndex, endIndex) {
  return weights.slice(startIndex, endIndex).reduce((acc, item) => acc + item, 0)
}

[
  [[1,2,3,4,5,6,7,8,9,10], 5],
  [[3,2,2,4,1,4], 3],
  [[1,2,3,1,1], 4]
].forEach(input => {
  console.log(shipWithinDays(...input))
})