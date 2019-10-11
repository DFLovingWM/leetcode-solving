/**
 * 排序的标准：拼接降序
 * 
 * 时间：O(NlogN), 72ms
 */
var largestNumber = function (nums) {
  let res = nums.map(String).sort((a, b) => {
    // 对于2个字符串而言，有2种拼接方式
    const A = a + b
    const B = b + a

    // 拼接后，更大的优先
    if (A > B) return -1
    if (A < B) return 1
    return 0
  }).join('')

  // 去掉前面多余的0
  let i = 0
  while (res[i] === '0') ++i
  res = res.slice(i) || '0'

  return res
};

[
  [10,2],
  [3,30,34,5,9],
  [0,0],
  [0],
  []
].forEach(arr => {
  console.log(largestNumber(arr))
})