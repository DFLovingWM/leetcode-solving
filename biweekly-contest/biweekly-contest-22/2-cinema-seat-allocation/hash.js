/**
 * 哈希：按row哈希
 * 
 * 时间：O(N), 156ms
 * 空间：52.8MB
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  const row2ColSet = new Map();
  for (const [r, c] of reservedSeats) {
    if (!row2ColSet.has(r)) {
      row2ColSet.set(r, new Set());
    }
    row2ColSet.get(r).add(c);
  }

  let res = (n - row2ColSet.size) * 2; // 空行：能坐2个家庭
  for (const colSet of row2ColSet.values()) {
    res += getFamily(colSet);
  }
  return res;
};

// 输入一行的座位表，返回最多能容纳的家庭数
function getFamily(colSet) {
  const left = [2,3,4,5].every(i => !colSet.has(i));
  const right = [6,7,8,9].every(i => !colSet.has(i));
  if (left && right) return 2;
  if (left || right) return 1;

  const middle = [4,5,6,7].every(i => !colSet.has(i));
  if (middle) return 1;

  return 0;
}