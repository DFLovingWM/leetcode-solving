/**
 * 暴力
 */
var sumFourDivisors = function(nums) {
  let res = 0;
  const cache = new Map();
  for (const num of nums) {
    res += get4FactorSum(num, cache);
  }
  return res;
};

function get4FactorSum(n, cache) {
  if (cache.has(n)) return cache.get(n);

  let count = 0;
  let sum = 0;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= limit; ++i) {
    if (n % i === 0) {
      count += 1;
      sum += i;
      if (i !== n / i) {
        count += 1;
        sum += n / i;
      }
      if (count > 4) break; // 超过4个，可以提前退出
    }
  }
  const res = count === 4 ? sum : 0;
  cache.set(n, res);
  return res;
}

console.log(sumFourDivisors([1,2,3,4,5,6,7,8,9,10]))