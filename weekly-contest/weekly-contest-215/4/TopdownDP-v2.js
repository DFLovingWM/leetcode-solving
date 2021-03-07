/**
 * 轮廓线DP
 * 
 * 时间：O(N^2 * K^2 * 3^N) <= O(22W), 1420ms
 */
var getMaxGridHappiness = function(m, n, introvertsCount, extrovertsCount) {
  const memo = new Map();

  /**
   * 状态函数
   * @param {number} r 当前在第r行
   * @param {number} c 当前在第c列
   * @param {number} a 内向剩余个数
   * @param {number} b 外向剩余个数
   * @param {string} prevN 当前行、左边已有的字符串
   * @returns {number} 最大幸福感
   */
  function helper(r, c, a, b, prevN) {
    const key = `${r},${c},${a},${b},${prevN}`;
    if (memo.has(key)) return memo.get(key);

    if (r === m) return 0;

    // 换行
    if (c === n) {
      return helper(r + 1, 0, a, b, prevN);
    }

    // 邻居（left/top）
    const neighbors = [];
    if (r > 0) { // 不是首行，就看上面的邻居
      neighbors.push(prevN[0]);
    }
    if (c > 0) { // 不是首列，就看上面的邻居
      neighbors.push(prevN[n - 1]);
    }

    // 选择1:不放
    let res = helper(r, c + 1, a, b, prevN.slice(1) + ' ');

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
      curr += helper(r, c + 1, a - 1, b, prevN.slice(1) + 'a');
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
      curr += helper(r, c + 1, a, b - 1, prevN.slice(1) + 'b');
      res = Math.max(res, curr);
    }

    memo.set(key, res);
    return res;
  }

  return helper(0, 0, introvertsCount, extrovertsCount, ' '.repeat(n));
};

module.exports = getMaxGridHappiness;
