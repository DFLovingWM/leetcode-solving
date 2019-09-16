/**
 * 参考：https://leetcode.com/problems/redundant-connection/discuss/108002/Unicode-Find-(5-short-lines)
 * 模拟并查集，不过在JS中不过
 */
var findRedundantConnection = function(edges) {
  const n = edges.length
  let str = Array.from({ length: n + 1 }, (_, index) => String.fromCharCode(index)).join('')
  for (const [a, b] of edges) {
    if (str[a] === str[b]) {
      return [a, b]
    } else {
      str = str.replace(new RegExp(str[a], 'g'), str[b])
    }
  }
};

[
  [[1,2], [1,3], [2,3]],
  [[1,2], [2,3], [3,4], [1,4], [1,5]],
].forEach(edges => {
  console.log(findRedundantConnection(edges))
})
