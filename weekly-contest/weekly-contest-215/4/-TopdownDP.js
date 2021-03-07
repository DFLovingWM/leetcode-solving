/**
 * 逐行DP，每次只考虑「上一行」和「左边已有」
 * 
 * 时间：O(N^2 * K^2 * 3^N * 3^N) <= O(5400W), TLE
 */
var getMaxGridHappiness = function(m, n, introvertsCount, extrovertsCount) {
  const memo = new Map();

  /**
   * 状态函数
   * @param {number} r 当前在第r行
   * @param {number} a 内向剩余个数
   * @param {number} b 外向剩余个数
   * @param {string} topRow 上一行的字符串表示
   * @param {string} left 当前行、左边已有的字符串
   * @returns {number} 最大幸福感
   */
  function helper(r, a, b, topRow, left) {
    if (r === m) return 0;

    const key = `${r},${a},${b},${topRow},${left}`;
    if (memo.has(key)) return memo.get(key);

    // 换行
    const c = left.length;
    if (c === n) {
      return helper(r + 1, a, b, left, '');
    }
    // 邻居（left/top）
    const neighbors = [];
    if (r > 0) { // 不是首行，就看上面的邻居
      neighbors.push(topRow[c]);
    }
    if (c > 0) { // 不是首列，就看上面的邻居
      neighbors.push(left[c - 1]);
    }

    // 选择1:不放
    let res = helper(r, a, b, topRow, left + ' ');

    // 选择2:放a
    if (a > 0) {
      let curr = 120;
      for (const x of neighbors) {
        if (x === 'a') {
          curr -= 30;
          curr -= 30;
        } else if (x === 'b') {
          curr -= 30;
          curr += 20;
        }
      }
      curr += helper(r, a - 1, b, topRow, left + 'a');
      res = Math.max(res, curr);
    }

    // 选择3:放b
    if (b > 0) {
      let curr = 40;
      
      for (const x of neighbors) {
        if (x === 'a') {
          curr += 20;
          curr -= 30;
        } else if (x === 'b') {
          curr += 20;
          curr += 20;
        }
      }
      curr += helper(r, a, b - 1, topRow, left + 'b');
      res = Math.max(res, curr);
    }

    memo.set(key, res);
    return res;
  }

  return helper(0, introvertsCount, extrovertsCount, ' '.repeat(n), '');
};

module.exports = getMaxGridHappiness;
