/**
 * 状压DP（Top-down）
 * 
 * 时间：O(2^N * M), 276ms
 * 空间：O(2^N * M), 67MB
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  if (desiredTotal === 0) return true; // 目标就是0 => 稳赢

  const sum = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
  if (sum < desiredTotal) return false; // 全部数字选完了，都不够 => 不能稳赢
  if (sum === desiredTotal) return maxChoosableInteger & 1; // 选完刚好到达目标 => 最后出手的人稳赢

  const memo = new Map();

  // 当前已选择`cover`（二进制表示）、和为`sum`，最终是否能赢
  function helper(cover, sum) {
    // 如果和已经满足/超过目标，则我无法再继续，所以输
    if (sum >= desiredTotal) {
      return false;
    }

    // 取缓存
    const key = `${cover},${sum}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let res = false;
    for (let i = 1; i <= maxChoosableInteger; ++i) { // 在1～max中，尝试未选的数字
      if (!(cover & (1 << i))) { // 如果`i`未选
        const nextCover = cover ^ (1 << i);
        if (!helper(nextCover, sum + i)) { // 如果对方输了
          res = true; // 那我就赢
          break; // 可以break吗（能AC，似乎说明可以break。。）
        }
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0);
};

module.exports = canIWin;