/**
 * 递归
 */
var decodeString = function(text) {
  return f(text)
};

function f (str) {
  let result = ''

  let n = 0
  let substr = '', weight = 0

  for (let i = 0; i < str.length; ++i) {
    const ch = str[i]

    if (weight > 0) { // 处于递归模式
      weight += (ch === '[' ? 1 : ch === ']' ? -1 : 0)
      if (weight === 0) {
        // 将解码后的加进字符串中
        result += f(substr).repeat(n);
        // 重置
        [n, substr, weight] = [0, '', 0];
      } else {
        substr += ch
      }
    } else {
      if (isAlpha(ch)) {
        result += ch
      } else if (isDigit(ch)) {
        n = n * 10 + Number(ch)
      } else if (ch === '[') {
        ++weight
      }
    }
  }

  return result
}

function isDigit (char) {
  return /^\d$/.test(char)
}

function isAlpha (char) {
  return /^[a-zA-Z]$/.test(char)
}

[
  // "3[a]2[bc]",
  // "3[a2[c]]",
  // "2[abc]3[cd]ef",
  "3[a]2[b4[F]c]"
].forEach(text => {
  console.log(decodeString(text))
})
