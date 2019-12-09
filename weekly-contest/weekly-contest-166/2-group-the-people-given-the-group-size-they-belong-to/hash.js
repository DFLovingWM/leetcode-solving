/**
 * 贪心（利用哈希表来分组）
 */
var groupThePeople = function (groupSizes) {
  const size2Ids = new Map()
  for (const [id, size] of groupSizes.entries()) {
    if (!size2Ids.has(size)) {
      size2Ids.set(size, [])
    }
    size2Ids.get(size).push(id)
  }

  const res = []
  for (const [size, ids] of size2Ids.entries()) {
    let group = []
    for (const id of ids) {
      group.push(id)
      if (group.length === size) {
        res.push(group)
        group = []
      }
    }
  }
  return res
};