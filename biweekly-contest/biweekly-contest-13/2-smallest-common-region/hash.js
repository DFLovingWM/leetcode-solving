/**
 * 哈希表：记录父结点
 * 
 * 时间：128ms
 */
var findSmallestRegion = function (regions, x, y) {
  const parent = new Map() // 记录父结点
  for (const [p, ...children] of regions) {
    for (const child of children) {
      parent.set(child, p)
    }
  }

  // 标记x的路径
  const xx = new Set()
  xx.add(x)
  while (parent.has(x)) {
    x = parent.get(x)
    xx.add(x)
  }

  // 从y开始寻找共同祖先
  if (xx.has(y)) return y
  while (parent.has(y)) {
    y = parent.get(y)
    if (xx.has(y)) return y
  }
};

[
  [[["Earth","North America","South America"],
  ["North America","United States","Canada"],
  ["United States","New York","Boston"],
  ["Canada","Ontario","Quebec"],
  ["South America","Brazil"]], 'Quebec', 'New York'],
  [[["Earth", "North America", "South America"],["North America", "United States", "Canada"],["United States", "New York", "Boston"],["Canada", "Ontario", "Quebec"],["South America", "Brazil"]], "Canada", "South America"],
].forEach(input => {
  console.log(findSmallestRegion(...input))
})