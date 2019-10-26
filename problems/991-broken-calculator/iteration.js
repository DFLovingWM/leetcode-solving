/**
 * 循环：逆向思维，从Y求X：
 * Y减1，或者Y/2
 * 
 * 时间：64ms
 */
function brokenCalc (x, y) {
  let step = 0
  
  while (y !== x) {
    if (y < x) {
      step += x - y
      break
    }

    if (y % 2 === 0) { // y是偶数，就除以2（能除以2就除以2，因为这样能更快逼近x）
      y /= 2
    } else { // y是奇数，就加1
      ++y
    }
    ++step
  }

  return step
}

module.exports = brokenCalc