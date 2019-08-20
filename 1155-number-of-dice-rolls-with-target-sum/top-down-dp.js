const MOD = Math.pow(10, 9) + 7

/**
 * Top-down DP = Recusion + Memorization
 * @param {number} diceCount (剩余)骰子数
 * @param {number} faceCount 骰子面数
 * @param {number} targetSum (剩余)目标和
 * @param {number} result 结果
 * @param {Map} 记忆化Map
 * @returns 目标和的组合数
 */
function numRollsToTarget (diceCount, faceCount, targetSum, result = 0, memory = new Map()) {
  const key = getKey(diceCount, targetSum)
  if (memory.has(key)) return memory.get(key)

  if (diceCount * faceCount < targetSum || diceCount > targetSum) {
    return 0 // Prune.
  }
  if (diceCount === 0) {
    return 1 // Bingo!
  }
  for (let f = 1; f <= faceCount; ++f) {
    result = (result + numRollsToTarget(diceCount - 1, faceCount, targetSum - f, 0, memory)) % MOD
  }
  memory.set(key, result)
  return result
}

function getKey (diceCount, targetSum) {
  return diceCount + ',' + targetSum
}

[
  [1, 6, 3],
  [2,6,7],
  [2,5,10],
  [1,2,3],
  [30,30,500]
].forEach(input => {
  console.log(numRollsToTarget(...input))
})
