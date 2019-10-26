/**
 * 暴力(TLE)：
 * 将所有表达式neng出来，然后逐一eval
 */
var addOperators = function (num, target) {
  const exps = []

  function backtrack (text, i, exp) {
    if (i === text.length) {
      if (eval(exp) === target) {
        exps.push(exp)
      }
      return
    }
    
    // 添加3种运算符
    for (const ch of ['+', '-', '*']) {
      backtrack(text, i + 1, exp + ch + text[i])
    }
    // 不添加，让数字连起来（注意不能是"00"）
    if (text[i] !== '0') {
      backtrack(text, i + 1, exp + text[i])
    }
  }

  backtrack(num, 1, num[0])
  return exps
};

module.exports = addOperators