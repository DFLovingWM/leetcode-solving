/**
 * Map记录现有区间
 */
var findLatestStep = function(arr, m) {
  const head = new Map();
  const tail = new Map();
  for (const num of arr) {
    // 看左边是否能连上
    if (num - 1 >= 0 && tail.has(num - 1)) {
      tail.set(num, tail.get(num - 1));
      tail.delete(num - 1);
    }
    // 同理看右边
    if (num + 1 < arr.length) {

    }
  }
};