/**
 * 背包问题
 */
var largestNumber = function(costs, money) {
  const memo = new Map();

  function getPrice(str) {
    let res = 0;
    for (const ch of str) {
      res += costs[Number(ch) - 1];
    }
    return res;
  }

  function helper(n, restMoney) {
    if (n === 0) {
      return '';
    }
    
    const key = `${n}|${restMoney}`;
    if (memo.has(key)) return memo.get(key);

    let res = '';
    const unit = costs[n - 1];
    for (let i = Math.floor(restMoney / unit); i >= 0; --i) { // i表示能买n的个数
      const next = helper(n - 1, restMoney - unit * i);
      if (getPrice(next) === restMoney - unit * i) { // 可行
        const curr = String(n).repeat(i);
        const tmp = curr + next;
        if (tmp.length > res.length || tmp > res) res = tmp; // 最优
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(9, money) || '0'; // 倒着来（9～1）
};

module.exports = largestNumber;