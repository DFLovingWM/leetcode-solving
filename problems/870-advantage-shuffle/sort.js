/**
 * 贪心/排序
 * 
 * 时间：O(NlogN), 200ms
 */
var advantageCount = function(A, B) {
  const n = B.length;
  // B下标数组，对应元素升序
  const bList = Array
    .from({ length: n }, (_, i) => i)
    .sort((i, j) => (
      B[i] - B[j]
    ));
  // A数组升序
  A.sort((a, b) => a - b);
  // A数组下标
  let a = 0;
  // 结果数组(保存A的下标)
  const res = Array.from({ length: n }, () => -1); // -1 表示该位置未安排
  // 未安排的马(保存下标)
  const unArrangedList = [];

  // 开始安排马
  for (const b of bList) {
    // 直到找到比 B[i] 大的为止
    while (a < n && A[a] <= B[b]) {
      unArrangedList.push(a);
      ++a;
    }
    if (a >= n) break;
    res[b] = a;
    ++a;
  }
  // 剩余的没法造成优势，就随便(比如按一定顺序)安排吧
  for (let i = 0; i < n; ++i) {
    if (res[i] === -1) {
      res[i] = unArrangedList.pop();
    }
  }

  // 下标 => 值
  return res.map(i => A[i]);
};