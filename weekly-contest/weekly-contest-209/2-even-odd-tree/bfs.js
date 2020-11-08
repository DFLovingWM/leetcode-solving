/**
 * 层次遍历
 */
var isEvenOddTree = function(root) {
  let currs = [root];

  for (let l = 0; currs.length > 0; ++l) {
    // 检验这一层
    if (!check(currs, l)) return false;

    // 准备下一层
    const nexts = [];
    for (const curr of currs) {
      if (curr.left) nexts.push(curr.left);
      if (curr.right) nexts.push(curr.right);
    }
    currs = nexts;
  }

  return true;
};

function check(currs, level) {
  const n = currs.length;

  if (level & 1) { // 奇
    for (let i = 0; i < n; ++i) {
      if (currs[i].val & 1) return false;
      if (i > 0 && currs[i].val >= currs[i - 1].val) return false;
    }
    return true;
  }

  // 偶
  for (let i = 0; i < n; ++i) {
    if (!(currs[i].val & 1)) return false;
    if (i > 0 && currs[i].val <= currs[i - 1].val) return false;
  }
  return true;
}