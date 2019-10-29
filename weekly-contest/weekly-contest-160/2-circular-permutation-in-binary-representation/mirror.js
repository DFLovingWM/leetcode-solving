/**
 * 镜像反射法
 * 
 * 时间：180ms
 */
var circularPermutation = function (n, start) {
  const res = [start]

  for (let i = 0; i < n; ++i) { // 推导到n阶
    const head = 1 << i

    for (let j = res.length - 1; j >= 0; --j) {
      res.push(head ^ res[j])
    }
  }

  return res
};

module.exports = circularPermutation