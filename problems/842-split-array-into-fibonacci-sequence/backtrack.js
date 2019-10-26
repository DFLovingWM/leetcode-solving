/**
 * 枚举每一个开头，然后再检测
 * 
 * 时间：236ms
 */
const MAX = Math.pow(2, 31) - 1

let res

var splitIntoFibonacci = function (text) {
  res = []
  backtrack(text, 0, [])
  return res
};

function backtrack (text, from, seq) {
  const n = seq.length

  if (n < 2) { // 小于2个，则枚举
    if (from === text.length) return

    if (text[from] === '0') { // 0只能单独字符作为数字
      if (backtrack(text, from + 1, seq.concat(0))) return true
    } else { // 寻找多位数字
      for (let end = from + 1; end <= text.length; ++end) {
        const num = Number(text.slice(from, end))
        if (backtrack(text, end, seq.concat(num))) return true
      }
    }
  } else { // 2个以上，则(有目标地)寻找
    if (from === text.length) {
      if (seq.length >= 3 && seq[n - 1] <= MAX) { // 序列已经满足斐波那契，则可以终止递归了
        res = seq
        return true
      }
      return false
    }

    const target = seq[n - 1] + seq[n - 2] // 下一个数字（贪心找）
    const targetStr = String(target)
    if (text.slice(from).startsWith(targetStr)) {
      if (backtrack(text, from + targetStr.length, seq.concat(target))) return true
    }
  }

  return false
}

module.exports = splitIntoFibonacci