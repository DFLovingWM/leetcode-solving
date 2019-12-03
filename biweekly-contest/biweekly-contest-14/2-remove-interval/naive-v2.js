/**
 * 分类讨论
 */
var removeInterval = function (intervals, del) {
  const res = []
  for (const it of intervals) {
    if (it[1] <= del[0] || it[0] >= del[1]) { // 不相交
      res.push(it)
    }
    if (it[0] < del[0] && del[0] < it[1]) { // 左相交
      res.push([it[0], del[0]])
    }
    if (it[0] < del[1] && del[1] < it[1]) { // 右相交
      res.push([del[1], it[1]])
    }
  }
  return res
};

module.exports = removeInterval