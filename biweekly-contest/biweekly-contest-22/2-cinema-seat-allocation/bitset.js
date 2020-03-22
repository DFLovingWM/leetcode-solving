/**
 * 位压缩
 * 
 * 时间：O(N), 116ms
 * 空间：44MB
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  const row2Bit = new Map(); // 行 => 二进制（表示行的占据情况）
  for (const [r, c] of reservedSeats) {
    if (!row2Bit.has(r)) {
      row2Bit.set(r, 0);
    }
    row2Bit.set(r, row2Bit.get(r) ^ (1 << (10 - c))); // 注意：数据中的列从1开始并且左右相反
  }

  let res = (n - row2Bit.size) * 2; // 空行：能坐2个家庭
  for (const bit of row2Bit.values()) {
    res += getFamily(bit);
  }
  return res;
};

// 输入二进制，返回最多能容纳的家庭数
function getFamily(bit) {
  const [l, m, r] = [0b1000011111, 0b1110000111, 0b1111100001]

  // 理解1：如果bit左边能坐下1个家庭，那么l被bit影响后，几个空位依然存在
  // 理解2（更好）：如果bit左边能坐下1个家庭，那么bit左边也有4个0，其它的为0/1，即bit是l的子集
  const left = (l | bit) === l;
  const right = (r | bit) === r; // 同理
  if (left && right) return 2;
  if (left || right) return 1;

  const middle = (m | bit) === m; // 同理
  if (middle) return 1;

  return 0;
}

module.exports = maxNumberOfFamilies;