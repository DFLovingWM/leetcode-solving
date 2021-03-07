/**
 * 二进制状态枚举
 */
var checkPowersOfThree = function(n) {
  const upperbound = Math.ceil(log(3, n));
  for (let x = 1 << upperbound; x >= 0; --x) {
    const d = getValue(x);
    if (d === n) {
      return true;
    }
    // 因为迭代是递减的，之后会更加小，不可能再等于 n
    // 所以可提前退出
    if (d < n) {
      return false;
    }
  }
  return false;
};

function getValue(x) {
  // 先转为二进制
  const binary = x.toString(2);
  // 再求出对应的值
  let res = 0;
  for (const ch of binary) {
    res = res * 3 + Number(ch);
  }
  return res;
}

// 换底公式
function log(x, y) {
  return Math.log(y) / Math.log(x);
}

module.exports = checkPowersOfThree;
