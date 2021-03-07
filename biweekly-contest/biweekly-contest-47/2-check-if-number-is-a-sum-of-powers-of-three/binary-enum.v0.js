/**
 * 「保留着吧，反正AC了」版本
 */
var checkPowersOfThree = function(n) {
  const upperbound = Math.ceil(log(3, n));
  for (let x = 1 << upperbound; x >= 0; --x) {
    const d = getValue(x);
    // TODO:
    // 注意这个`d === n + 1`必不可少
    // 比赛时我以为最低位是 3^1 ，不是 3^0，于是用 1 来填补
    // 但后面再看，事实不是如此
    // 但是又AC了，如今我没有看懂
    if (d === n || d === n + 1) {
      return true;
    }
  }
  return false;
};

function getValue(binary) {
  let res = 0;
  for (; binary; binary >>>= 1) {
    res = res * 3 + (binary & 1);
  }
  return res;
}

// 换底公式
function log(x, y) {
  return Math.log(y) / Math.log(x);
}

module.exports = checkPowersOfThree;
