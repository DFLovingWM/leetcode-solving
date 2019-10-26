/**
 * 循环法
 */
function numsSameConsecDiff (N, K) {
  let results = []
  for (let headNum = 0; headNum <= 9; ++headNum) {
    let curr = [headNum]
    for (let count = 0; count < N - 1; ++count) {
      let acc = []
      for (const n of curr) {
        if (n === 0) continue // 排除“0XXX”这种不合法的值
        let tail = n % 10
        if (tail - K >= 0) acc.push(Number(`${n}${tail - K}`))
        if (K === 0) continue // K=0时左右会重复，只取一个
        if (tail + K <= 9) acc.push(Number(`${n}${tail + K}`))
      }
      curr = acc
    }
    results = results.concat(curr)
  }
  return results
}

module.exports = numsSameConsecDiff