/**
 * 回溯
 * 时间：O(2^N), 136ms
 * 空间：O(2^N), 37.5MB
 */
var grayCode = function(n) {
  const results = []
  backtrack('0'.repeat(n), new Set(), results)
  return results.map(toNumber)
};

function backtrack (code, visited, results) {
  visited.add(code)
  results.push(code)
  
  for (let i = 0; i < code.length; ++i) {
    const nextCode = code.slice(0, i) + (code[i] === '0' ? '1' : '0') + code.slice(i + 1)
    if (!visited.has(nextCode)) {
      backtrack(nextCode, visited, results)
    }
  }
}

// 二进制字符串 => 十进制数字
function toNumber (binaryStr) {
  let result = 0
  for (const ch of binaryStr) {
    result = result * 2 + Number(ch)
  }
  return result
}

[2, 0].forEach(n => {
  console.log(grayCode(n))
})