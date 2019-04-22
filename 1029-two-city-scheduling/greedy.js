/**
 * 贪心。
 * 复杂度在排序：O(NlogN)
 * 
 * - O(NlogN), 104ms
 */
var twoCitySchedCost = function(costs) {
  costs.sort((costA, costB) => Math.abs(costA[0] - costA[1]) - Math.abs(costB[0] - costB[1])); // 排序：按照差价的升序（最后有用）

  let result = 0;
  let A = 0, B = 0;

  // 先挑选出所有pair中更便宜的，同时记录A、B数量
  for (const [a, b] of costs) {
    if (a <= b) {
      ++A
      result += a
    } else {
      ++B
      result += b
    }
  }

  // 最后，为了重新平衡A、B的数量，从差价最小的开始改变
  for (const [a, b] of costs) {
    if (A === B) break // 直到两者相等为止

    if (A > B && a <= b) { // 关键：如果此时A比B多，而且之前是选了A的，这次要换成B
      result = result - a + b
      --A
      ++B
    } else if (A < B && a > b) {
      result = result - b + a
      ++A
      --B
    }
  }

  return result
};

[
  [[10,20],[30,200],[400,50],[30,20]],
  [[518,518],[71,971],[121,862],[967,607],[138,754],[513,337],[499,873],[337,387],[647,917],[76,417]],
].forEach(costs => {
  console.log(twoCitySchedCost(costs))
})
