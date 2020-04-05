/**
 * 字符串模拟位操作
 */
var numSteps = function (s) {
  let res = 0;
  while (true) {
    const n = s.length;
    if (n === 1) {
      break;
    }
    if (s[n-1] === '1') { // 奇数
      s = addOne(s);
    } else { // 偶数
      s = divideBy2(s);
    }
    ++res;
  }
  return res;
};

// 加1
function addOne(s) {
  let i;
  const n = s.length;
  for (i = n - 1; i >= 0; --i) {
    if (s[i] === '0') {
      break;
    }
  }
  if (i < 0) { // 不存在0
    return '1' + '0'.repeat(n);
  }
  return s.slice(0, i) + '1' + '0'.repeat(n - i - 1);
}

// 除以2 => 右移1位
function divideBy2(s) {
  return s.slice(0, s.length - 1);
}

module.exports = numSteps;