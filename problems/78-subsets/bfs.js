/**
 * BFS
 * 
 * 时间：76ms
 */
var subsets = function (nums) {
  let curr = [new Node(0, [])]
  let all = [...curr] // 全部level的结点

  while (true) {
    const next = []

    for (const { start, acc } of curr) {
      for (let i = start; i < nums.length; ++i) {
        next.push(new Node(i + 1, acc.concat(nums[i])))
      }
    }

    if (next.length === 0) break // 没有下一层时，可以结束了

    all.push(...next)
    curr = next
  }

  return all.map(node => node.acc)
};

function Node (start, acc) {
  this.start = start
  this.acc = acc
}

module.exports = subsets