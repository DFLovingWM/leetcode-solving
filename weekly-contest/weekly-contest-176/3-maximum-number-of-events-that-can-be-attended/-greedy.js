/**
 * 贪心
 */
var maxEvents = function (intervals) {
  intervals.sort((A, B) => {
    if (A[0] !== B[0]) return A[0] - B[0];
    return A[1] - B[1];
  });

  let res = 0;
  let prev = -1;
  for (let i = 0; i < intervals.length; ++i) {
    const interval = intervals[i];
    if (prev + 1 <= interval[0]) { // 左离
      prev = interval[0];
      ++res;
    } else if (prev + 1 <= interval[1]) { // 包含
      prev = prev + 1;
      ++res;
    }
  }
  return res;
};