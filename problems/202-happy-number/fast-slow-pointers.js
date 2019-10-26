/**
 * 快慢指针判断是否有环
 * 
 * 时间：80ms
 */
var isHappy = function (n) {
  if (n === 1) return true

  let [slow, fast] = [n, getNext(n)]
  while (slow !== fast) {
    if (slow === 1 || fast === 1) return true
    
    slow = getNext(slow)

    fast = getNext(fast)
    fast = getNext(fast)
  }
  return false
};

function getNext (n) {
  let ret = 0
  while (n) {
    ret += Math.pow(n % 10, 2)
    n = Math.floor(n / 10)
  }
  return ret
}

[1, 2, 19].forEach(n => console.log(isHappy(n)))