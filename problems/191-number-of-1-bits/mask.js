/**
 * 掩码不断左移
 */
var hammingWeight = function (n) {
  let mask = 1 // 掩码，初始化为1
  let count = 0

  for (let i = 0; i < 32; ++i) { // 最多32位
    if (mask & n) {
      ++count
    }
    mask = mask << 1
  }

  return count
};

module.exports = hammingWeight