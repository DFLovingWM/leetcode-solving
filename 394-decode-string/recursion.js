/**
 * 递归解法：每个递归单元解析一对括号，遇到`]`则可退出
 * 参考：https://leetcode.com/problems/decode-string/discuss/210284/Java-Recursive
 */
var decodeString = function(s) {
  const queue = new Queue(Array.from(s))
  return dfs(queue)
}

/**
 * 一次递归解决一对`[]`
 * @param {Queue} queue 总队列
 * @returns {string} 子字符串
 */
function dfs (queue) {
  debugger
  let K = 0
  let res = ''

  while (!queue.empty()) {
    const ch = queue.popFront()

    if (isNumber(ch)) {
      K = K * 10 + Number(ch)
    } else if (isLetter(ch)) {
      res += ch
    } else if (ch === '[') { // 遇到`[`：递归解析子串，完毕后重复添加
      const subString = dfs(queue)
      res += subString.repeat(K)
      K = 0
    } else if (ch === ']') { // 遇到`]`：因为只解析一对括号，所以可以结束了
      break
    }
  }

  return res
}

function isNumber (ch) {
  return /^\d$/.test(ch)
}

function isLetter (ch) {
  return /^[a-zA-Z]$/.test(ch)
}

class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  popFront () {
    return this.arr.shift()
  }

  front () {
    return this.arr[0]
  }
  
  empty () {
    return this.arr.length === 0
  }
}

[
  // "3[a]2[bc]",
  // "3[a2[c]]",
  // "2[abc]3[cd]ef",
  "3[a]2[b4[F]c]"
].forEach(text => {
  console.log(decodeString(text))
})
