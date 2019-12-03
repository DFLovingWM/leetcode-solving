/**
 * 排序 + 回溯
 * 
 * 时间：`O(2^N)`, 96ms
 */
var numTilePossibilities = function (tiles) {
  tiles = Array.from(tiles).sort() // 有序字母数组
  const visit = new Set() // 已经选过的位置
  let res = 0

  function backtrack () {
    for (let i = 0; i < tiles.length; ++i) {
      if (visit.has(i)) continue // 该字母不存在
      if (i > 0 && tiles[i] === tiles[i - 1] && !visit.has(i - 1)) continue // 该字母重复

      visit.add(i)
      ++res
      backtrack()
      visit.delete(i)
    }
  }

  backtrack()
  return res
};

module.exports = numTilePossibilities