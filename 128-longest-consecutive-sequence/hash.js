/**
 * hash法，记住那些数字是存在的，然后从某个数字开始不断加1，记录最长长度
 * [492ms] => [64ms]，具体见函数内的代码注释
 */
function longestConsecutive (nums) {
  let exist = {}
  for (const n of nums) {
    exist[n] = true
  }

  let maxLength = 0
  for (const n of nums) {
    // 如果存在比当前值(A)少1的数字(A-1)，即有更长的，那就不必从A出发寻找了
    // 这是个很有效的优化，耗时从[492ms]降到[64ms]
    // 时间复杂度也由 O(N2) 降到了 O(N)
    if (exist[n - 1]) {
      continue
    }

    let curr = n
    while (!!exist[curr]) ++curr
    maxLength = Math.max(maxLength, curr - n)
  }

  return maxLength
}

module.exports = longestConsecutive