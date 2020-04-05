/**
 * 奇偶性
 * 
 * 时间：O(N), 92ms
 */
var maxDepthAfterSplit = function(seq) {
  const res = [];
  let depth = 0;
  for (let i = 0; i < seq.length; ++i) {
    if (seq[i] === '(') { // 左括号
      ++depth; // 先深度加1
      res.push(depth & 1); // 再根据奇偶性分配
    } else { // 右括号
      res.push(depth & 1); // 因为右括号需要与左括号一起分配，所以先分配
      --depth; // 再将深度减1
    }
  }
  return res;
};