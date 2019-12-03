/**
 * 贪心/栈
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  const n = popped.length
  let i
  let j = 0

  for (i = 0; i < popped.length; ++i) {
    // 一直push、直到栈顶为popped[i]
    while (j < pushed.length && (stack.length === 0 || stack[stack.length - 1] !== popped[i])) {
      stack.push(pushed[j++])
    }
    if (stack.length === 0 || stack[stack.length - 1] !== popped[i]) break
    stack.pop()
  }

  return stack.length === 0
};

[
  [[1,2,3,4,5], [4,5,3,2,1]],
  [[1,2,3,4,5], [4,3,5,1,2]],
].forEach(input => {
  console.log(validateStackSequences(...input))
})