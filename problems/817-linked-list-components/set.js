/**
 * 将数组化为集合，然后扫一遍就行
 */
var numComponents = function (head, G) {
  const set = new Set(G)
  let res = 0
  let [prev, curr] = [null, head]

  while (curr) {
    if (set.has(curr.val) && (prev === null || !set.has(prev.val))) {
      ++res
    }
    [prev, curr] = [curr, curr.next]
  }

  return res
};

module.exports = numComponents