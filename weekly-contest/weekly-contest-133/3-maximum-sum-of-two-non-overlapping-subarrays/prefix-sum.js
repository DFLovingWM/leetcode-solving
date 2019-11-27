/**
 * 前缀和 + 暴力搜索
 * 
 * 时间：`O(N^2)`, 64ms
 */
var maxSumTwoNoOverlap = function (arr, lLen, mLen) {
  let acc = 0
  const prefix = [acc] // 前缀和
  for (const n of arr) {
    acc += n
    prefix.push(acc)
  }

  let res = 0

  for (let l = 0; l + lLen <= arr.length; ++l) { // 固定L的左边
    const L = prefix[l + lLen] - prefix[l]

    // 在L的右边找
    for (let m = l + lLen; m + mLen <= arr.length; ++m) {
      const M = prefix[m + mLen] - prefix[m]
      res = Math.max(res, L + M)
    }

    // 在L的左边找
    for (let m = 0; m + mLen <= l; ++m) {
      const M = prefix[m + mLen] - prefix[m]
      res = Math.max(res, L + M)
    }
  }

  return res
};

module.exports = maxSumTwoNoOverlap