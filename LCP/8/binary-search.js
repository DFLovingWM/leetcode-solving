/**
 * 二分查找 * 3次
 */
var getTriggerTime = function(increases, requirements) {
  const n = requirements.length;
  const d = increases.length;
  const res = Array.from({ length: n }, () => -Infinity);

  // 计算第`index`条轨道
  function calc(index) {
    const sortedArr = [0];
    let p = 0;
    for (let i = 0; i < d; ++i) {
      p += increases[i][index];
      sortedArr.push(p);
    }
    for (let i = 0; i < n; ++i) {
      const j = ge(sortedArr, requirements[i][index]);
      res[i] = Math.max(res[i], j);
    }
  }

  // 3条轨道，各自算
  for (let i = 0; i < 3; ++i) {
    calc(i);
  }
  return res.map(e => e === Infinity ? -1 : e);
};

// =========== 分割线 ===========

function bisectLeft (arr, x) {
  let [left, right] = [0, arr.length]
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (x <= arr[mid]) { // 相等情况
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

// 找刚好大于等于`x`的元素位置
function ge (arr, x) {
  const i = bisectLeft(arr, x)
  if (i < arr.length) return i
  return Infinity
}

[
  [[[2,8,4],[2,5,0],[10,9,8]], [[2,11,3],[15,10,7],[9,17,12],[8,1,14]]],
  [[[0,4,5],[4,8,8],[8,6,1],[10,10,0]], [[12,11,16],[20,2,6],[9,2,6],[10,18,3],[8,14,9]]],
  [[[1,1,1]], [[0,0,0]]],
].forEach(A => {
  console.log(getTriggerTime(...A))
})