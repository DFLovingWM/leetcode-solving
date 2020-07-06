/**
 * 朴素：遍历每个区间，计算有多少个包含queryTime即可
 */
var busyStudent = function(startTime, endTime, queryTime) {
  const n = startTime.length;
  let res = 0;
  for (let i = 0; i < n; ++i) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      ++res;
    }
  }
  return res;
};