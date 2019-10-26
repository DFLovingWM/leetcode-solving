/**
 * 滑动窗口 + 前缀和
 */
var minSwaps = function(data) {
  const sw = data.reduce((acc, item) => acc + item, 0)
  const length = data.length
  const prefix = [0]
  for (const n of data) {
    prefix.push(prefix[prefix.length - 1] + n)
  }

  let result = data.length
  let L = 0, R = L + sw // 滑动窗口的左右区间，左开右闭
  for (; R < prefix.length; ++L, ++R) {
    const tmp = sw - (prefix[R] - prefix[L])
    if (tmp < result) {
      result = tmp
    }
  }
  return result
};

[
  [1,0,1,0,1],
  [0,0,0,1,0],
  [1,0,1,0,1,0,0,1,1,0,1],
].forEach(arr => {
  console.log(minSwaps(arr))
})
