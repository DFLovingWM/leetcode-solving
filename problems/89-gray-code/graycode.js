/**
 * 格雷码推导
 */
var grayCode = function (n) {
  const res = []
  const limit = 1 << n
  for (let i = 0; i < limit; ++i) {
    res.push(binary2Gray(i))
  }
  return res
};

function binary2Gray (n) {
  return n ^ n >> 1
}

module.exports = grayCode