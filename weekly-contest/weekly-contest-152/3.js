/**
 * 计算字符串的前缀count，参考：https://leetcode.com/problems/can-make-palindrome-from-substring/discuss/371849/Java-prefix-sum-of-counting-characters-first-then-compare
 * 时间复杂度：O(M + 26N)
 */
var canMakePaliQueries = function(text, queries) {
  const prefix = [new Map()] // 用Map，或者arr[26]都可以
  for (let i = 0; i < text.length; ++i) {
    const letterCount = new Map(prefix[prefix.length - 1]) // 拷贝一下
    letterCount.set(text[i], (letterCount.get(text[i]) || 0) + 1)
    prefix.push(letterCount)
  }

  const answers = []
  for (const query of queries) {
    const [left, right, K] = query
    let count = 0
    for (let letter of prefix[right + 1].keys()) {
      count += (prefix[right + 1].get(letter) - (prefix[left].get(letter) || 0)) % 2 // 相同字母，可以成对消除
    }
    answers.push(Math.floor(count / 2) <= K)
  }
  return answers
};

[
  ['abcda', [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]],
  ["hunu", [[1,1,1],[2,3,0],[3,3,1],[0,3,2],[1,3,3],[2,3,1],[3,3,1],[0,3,0],[1,1,1],[2,3,0],[3,3,1],[0,3,1],[1,1,1]]],
  ["hunu", [[0,3,2],[1,3,3],[2,3,1],[3,3,1],[0,3,0],[1,1,1],[2,3,0],[3,3,1],[0,3,1],[1,1,1]]],
].forEach(input => {
  console.log(canMakePaliQueries(...input))
})