/**
 * DFS[72ms]
 * @param {Number[]} arr 剩余元素组成的数组
 * @param {Number[][]} results 结果集
 * @param {Number[]} result 当前结果(层层累计)
 */
function permute (arr, results = [], result = []) {
  if (arr.length === 1) {
    result.push(arr[0])
    results.push(result)
    return results
  }

  for (let i = 0; i < arr.length; ++i) {
    permute(
      [...arr.slice(0, i), ...arr.slice(i + 1)],
      results,
      result.concat(arr[i])
    )
  }

  return results
}

module.exports = permute