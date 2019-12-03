/**
 * 枚举2个区间的几种关系
 */
var removeInterval = function (intervals, toBeRemoved) {
  const res = []
  for (const interval of intervals) {
    if (interval[1] <= toBeRemoved[0] || interval[0] >= toBeRemoved[1]) { // 外离：保留
      res.push(interval)
    } else if (interval[0] <= toBeRemoved[0] && toBeRemoved[1] <= interval[1]) { // 内含toBeRemoved：分成2份
      if (interval[0] < toBeRemoved[0]) res.push([interval[0], toBeRemoved[0]])
      if (toBeRemoved[1] < interval[1]) res.push([toBeRemoved[1], interval[1]])
    } else if (interval[0] < toBeRemoved[0] && toBeRemoved[0] < interval[1]) { // 相交：部分保留
      res.push([interval[0], toBeRemoved[0]])
    } else if (interval[0] < toBeRemoved[1] && toBeRemoved[1] < interval[1]) { // 相交：部分保留
      res.push([toBeRemoved[1], interval[1]])
    } else { // 内含interval：整个删除
      //
    }
  }
  return res
};

module.exports = removeInterval