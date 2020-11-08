/**
 * 模拟 + 贪心
 */
var isMagic = function(target) {
  const n = target.length;
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  // 找k
  arr = getNext(arr);
  let count = 0;
  for (let i = 0; i < n; ++i) {
    if (target[i] === arr[i]) {
      ++count;
    } else {
      break;
    }
  }
  if (count === 0) return false;
  if (count === n) return true;
  // 以这个k来模拟
  const k = count;

  for (let loop = 0; true; ++loop) {
    const base = loop * k;
    // 检测前k个
    for (let i = 0; i < k; ++i) {
      if (target[base + i] !== arr[i]) {
        return false;
      }
    }
    // 抽取前k个
    arr = arr.slice(k);
    if (arr.length === 0) return true;
    // 排序
    arr = getNext(arr);
  }
};

function getNext(curr) {
  const next = [];
  // 奇
  for (let i = 1; i < curr.length; i += 2) {
    next.push(curr[i]);
  }
  // 偶
  for (let i = 0; i < curr.length; i += 2) {
    next.push(curr[i]);
  }
  return next;
}

[
  [2,4,3,1,5],
  [5,4,3,2,1],
].forEach(A => {
  console.log(isMagic(A))
})