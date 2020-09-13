/**
 * 抽屉原理
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var findDuplicates = function(arr) {
  const n = arr.length;
  for (let i = 0; i < n; ++i) {
    // 下标`v-1`处的数字应当是`v`
    // 如果不是的话，就需要替换过去
    for (let v = arr[i]; v !== arr[v - 1]; v = arr[i]) {
      swap(arr, i, v - 1);
      // 交换完毕后，位置`v-1`就是正确的了，以后就不需要再循环检测
    }
  }

  // 最终还不在正确位置上的元素，就是出现了不止1次的数字
  const res = [];
  for (let i = 0; i < n; ++i) {
    if (arr[i] !== i + 1) {
      res.push(arr[i]);
    }
  }
  return res;
};

// 在数组中，交换两个元素的位置
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.export = findDuplicates;
