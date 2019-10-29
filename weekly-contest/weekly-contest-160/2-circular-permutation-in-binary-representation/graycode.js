/**
 * 格雷码生成法
 */
var circularPermutation = function (n, start) {
  const res = []
  const limit = 1 << n
  for (let i = 0; i < limit; ++i) {
    res.push(start ^ binary2Gray(i))
  }
  return res
};

function binary2Gray (i) {
  return i ^ i >> 1
}

module.exports = circularPermutation