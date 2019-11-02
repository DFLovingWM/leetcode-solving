/**
 * 先平方增大，后缩小到目标
 * 
 * 时间：144ms
 */

// 用rand7实现rand49
function rand49 () {
  return (rand7() - 1) * 7 + rand7()
}

// 用rand49实现rand10
var rand10 = function () {
  while (true) {
    const x = rand49()
    if (x <= 40) {
      return Math.ceil(x / 4)
      // return x % 10 + 1 // 或者这样也可以
    }
    // 如果x>40就丢弃，这就是【拒绝采样】
  }
};