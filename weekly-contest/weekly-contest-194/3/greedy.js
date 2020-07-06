/**
 * 贪心 + 二分查找
 */
var avoidFlood = function(rains) {
  const rainIndex = []; // 下雨的日子(有序数组)
  for (const [i, r] of rains.entries()) {
    if (r !== 0) {
      rainIndex.push(i);
    }
  }

  const res = [];
  const rainSet = new Set(); // 记录当前还有雨的坑
  let x = -1; // 二分的开始日子
  for (const [i, r] of rains.entries()) {
    if (r !== 0) { // 下雨
      if (rainSet.has(r)) return []; // 失败
      rainSet.add(r);
      res.push(-1);
    } else { // 可以抽水
      // 挑选最近即将下雨的位置
      x = Math.max(x, i);
      const j = bisectRight(rainIndex, x);
      if (j >= rainIndex.length) { // 不需要抽水，则随机给个值
        res.push(20140729);
      } else {
        const p = rains[rainIndex[j]]; // p为坑
        // 消除`p`坑的雨水
        res.push(p);
        rainSet.delete(p);
        // 更新二分的开始位置
        x = rainIndex[j];
      }
    }
  }

  return res;
};

function bisectRight(arr, x) {
  let [left, right] = [0, arr.length];
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (x >= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

[
  // [1,2,3,4],
  // [1,2,0,0,2,1],
  // [1,2,0,1,2],
  // [69,0,0,0,69],
  // [10,20,20],
  [1,0,2,0,2,1],
].forEach(A => {
  console.log(avoidFlood(A));
})