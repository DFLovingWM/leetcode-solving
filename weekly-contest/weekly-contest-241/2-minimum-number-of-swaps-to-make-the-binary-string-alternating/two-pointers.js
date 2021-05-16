/**
 * 双指针
 * 拓展：类比922
 */
var minSwaps = function(s) {
  // 寻找2次
  const res = Math.min(parse(s, '0', '1'), parse(s, '1', '0'));
  return res === Infinity ? -1 : res;
};

function parse(s, valueA, valueB) {
  const arr = s.split('');
  let res = 0;
  let [i, j] = [0, 1];
  const n = arr.length;
  while (true) {
    // i 快进到不合法
    while (i < n && arr[i] === valueA) {
      i += 2;
    }
    // j 快进到不合法
    while (j < n && arr[j] === valueB) {
      j += 2;
    }

    if (i < n && j < n) {
      // 交换1次
      [arr[i], arr[j]] = [arr[j], arr[i]];
      ++res;
    } else if (i >= n && j >= n) {
      // 完成
      break;
    } else {
      return Infinity;
    }
  }
  return res;
}
