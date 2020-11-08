/**
 * 双指针
 * 时间：O(NlogN)
 */
var breakfastNumber = function(staples, drinks, x) {
  staples.sort((a, b) => a - b);
  drinks.sort((a, b) => a - b);

  const mod = 1e9 + 7;
  let res = 0;
  let j = drinks.length - 1; // 注：j是始终递减的，保证了下面整体时间为O(N)，而非O(N^2)
  for (const s of staples) {
    while (j >= 0 && drinks[j] + s > x) --j;
    res += j + 1;
    res %= mod;
  }
  return res;
};