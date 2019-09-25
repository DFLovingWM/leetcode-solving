/**
 * 暴力（回溯）
 */
var eraseOverlapIntervals = function(intervals) {
  intervals = intervals.slice().sort((a, b) => a[0] - b[0]) // 开始时间升序
  return helper(intervals, -1, 0)
};

/**
 * 递归单元
 * @param {number[][]} intervals 区间集合
 * @param {number} prev 上一个区间下标
 * @param {number} curr 当前区间下标
 * @returns {number} 最小删除数
 */
function helper (intervals, prev, curr) {
  if (curr === intervals.length) return 0 // 叶子结点：到达结尾了，没法区间可以删除，返回0

  let keep = Infinity
  if (prev === -1 || intervals[curr][0] >= intervals[prev][1]) { // curr与prev不冲突的时候，才能选择【保留curr】
    keep = helper(intervals, curr, curr + 1)
  }

  let nokeep = helper(intervals, prev, curr + 1) + 1 // 任何时候都能选择【不保留curr】

  return Math.min(keep, nokeep) // 因为最终要取最小值，所以这里要取更小值
}

module.exports = eraseOverlapIntervals