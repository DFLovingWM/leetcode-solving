/**
 * 下标排序法，用空间S(M)换时间T(N)
 * 适用范围较小，需满足：
 * 1. 非负整数(下标的特点)
 * 2. 数字最大值不能太大(数组长度限制)
 * 
 * 这个方法很巧妙，相关题目：
 * - https://leetcode.com/problems/top-k-frequent-elements/discuss/81602/Java-O(n)-Solution-Bucket-Sort
 */
function indexSort (arr) {
  // 找到最大值，确定hash数组大小
  let max = arr.reduce((result, item) => Math.max(result, item), -1)

  // 建立hash数组，值表示出现次数
  let count = Array.from({ length: max + 1 }, _ => 0)

  // 遍历，计算count
  for (const n of arr) {
    ++count[n]
  }

  // 重新整理成新数组
  let sortedArr = []
  /*
   * 注意：
   * 这里虽有2重循环，
   * 但总数等于N，所以时间复杂度还是O(N)
   */
  for (let n = 0; n <= max; ++n) { // n表示可能存在的正整数
    let c = count[n]
    while (c--) { // 有多少个n，就加入多少个
      sortedArr.push(n)
    }
  }

  return sortedArr
}

module.exports = indexSort