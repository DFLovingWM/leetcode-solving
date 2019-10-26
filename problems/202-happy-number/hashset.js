/**
 * 循环直到：
 * - 变为1(成功)
 * - 重复(失败)，可以用Set或者快慢指针来判断重复
 * 
 * 时间：76ms
 */
var isHappy = function (n) {
  const visit = new Set()
  while (true) {
    visit.add(n)
    n = getNext(n)
    if (n === 1) return true
    if (visit.has(n)) return false
  }
};

function getNext (n) {
  let ret = 0
  while (n) {
    ret += Math.pow(n % 10, 2)
    n = Math.floor(n / 10)
  }
  return ret
}

[2, 19].forEach(n => console.log(isHappy(n)))