/**
 * 双指针
 * 时间：O(N), 124ms
 */
var sortArrayByParityII = function(arr) {
  let j = 1 // 奇数指针
  let i = 0 // 偶数指针

  // 目标：保证i上的都是偶数
  while (i < arr.length) {
    if (arr[i] & 1) { // 如果i上是奇数，则与j交换（j前进）
      swap(arr, i, j)
      j += 2
    } else { // 合法，则i继续当前检测
      i += 2
    }
  }

  return arr
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function isEven (n) {
  return (n & 1) === 0
}

module.exports = sortArrayByParityII