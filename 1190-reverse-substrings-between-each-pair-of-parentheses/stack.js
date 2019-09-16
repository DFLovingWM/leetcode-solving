/**
 * 栈
 */
var reverseParentheses = function(s) {
  const stack = new Stack()

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === ')') {
      let reverseSubstr = ''

      // 取出来
      while (stack.top() !== '(') {
        reverseSubstr += stack.pop()
      }
      stack.pop()
      
      // 再放回去
      for (const ch of reverseSubstr) {
        stack.push(ch)
      }
    } else {
      stack.push(s[i])
    }
  }

  let res = ''
  while (!stack.empty()) res += stack.pop()

  // 最后逆转一下
  return Array.from(res).reverse().join('')
};

class Stack {
  constructor (arr = []) {
    this.arr = arr
  }

  top (n = 1) {
    return this.arr[this.arr.length - n]
  }

  pop () {
    return this.arr.pop()
  }

  push (x) {
    this.arr.push(x)
  }

  empty () {
    return this.arr.length === 0
  }
}

[
  '(abcd)',
  '(u(love)i)',
  '(ed(et(oc))el)',
  'a(bcdefghijkl(mno)p)q',
].forEach(s => {
  console.log(reverseParentheses(s))
})