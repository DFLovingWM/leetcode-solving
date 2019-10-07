/**
 * 数字BFS
 * 
 * 时间：140ms
 */
var countSteppingNumbers = function (low, high) {
  let set = new Set()
  let res = []

  // 初始状态
  res.push(0) // set中不加入0，是因为BFS时不好处理，所以这里res单独加入0
  for (let i = 1; i <= 9; ++i) { // 第一行为1～9
    if (i <= high) {
      set.add(i)
      res.push(i)
    }
  }

  // 开始BFS
  let done = false
  while (!done) {
    const nextSet = new Set()

    for (const n of set) {
      const tmp = n * 10 + n % 10 // 在结尾加一个数字

      if (tmp % 10 !== 0) {
        if (tmp - 1 <= high) {
          nextSet.add(tmp - 1)
        } else {
          done = true
          break
        }
      }

      if (tmp % 10 !== 9) {
        if (tmp + 1 <= high) {
          nextSet.add(tmp + 1)
        } else {
          done = true
          break
        }
      }
    }

    set = nextSet // set始终是最后一行的元素
    res.push(...set) // res是全部元素
  }

  // 最后排除low以下的
  let i = 0
  while (res[i] < low) ++i
  res = res.slice(i)

  return res
};

module.exports = countSteppingNumbers