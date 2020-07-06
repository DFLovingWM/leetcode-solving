/**
 * 背包问题 + 二进制优化
 */
var largestNumber = function(costs, money) {
  const map = new Map();
  
  for (let i = 1; i <= 9; ++i) {
    map.set(i, []);
    let amount = Math.floor(money / costs[i - 1]);
    for (let p = 1; amount >= p; p *= 2) {
      amount -= p;
      map.get(i).push(costs[i - 1] * p);
    }
    if (amount > 0 && Number.isInteger(Math.log2(amount))) {
      map.get(i).push(amount);
    }
  }

  const memo = new Map();

  function getPrice(str) {
    let res = 0;
    for (const ch of str) {
      res += costs[Number(ch) - 1];
    }
    return res;
  }

  function helper(n, restMoney) {
    if (n === 0) return '';
    
    const key = `${n}|${restMoney}`;
    if (memo.has(key)) return memo.get(key);

    let res = '';
    const unit = costs[n - 1];
    for (const p of map.get(n)) {
      const i = p / unit; // i表示能买n的个数
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