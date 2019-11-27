/**
 * 单调栈 解决NextGreater问题
 */
var nextLargerNodes = function (head) {
  // 化为数组，更方便操作
  const arr = []
  for (let p = head; p; p = p.next) {
    arr.push(p.val)
  }

  const res = new Array(arr.length).fill(0)
  const mono = []
  for (let i = 0; i < arr.length; ++i) {
    while (mono.length > 0 && arr[i] > arr[mono[mono.length - 1]]) { // 比栈顶大，则更新栈顶
      res[mono.pop()] = arr[i]
    }
    mono.push(i)
  }

  return res
};

module.exports = nextLargerNodes