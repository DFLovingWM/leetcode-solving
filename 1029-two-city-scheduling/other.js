/**
 * 参考votrubac的解法：
 * https://leetcode.com/problems/two-city-scheduling/discuss/278716/C%2B%2B-O(n-log-n)-sort-by-cost-difference
 * 
 * 思路：
 * 按照“A比B省多少”排序(升序)。然后前一半去A，后一半去B
 * 
 * - O(NlogN), 64ms
 */
var twoCitySchedCost = function(costs) {
  costs.sort((l, r) => (l[0] - l[1]) - (r[0] - r[1]))

  let N2 = costs.length, N = N2 / 2
  let result = 0

  for (let i = 0; i < N; ++i) result += costs[i][0]
  for (let i = N; i < N2; ++i) result += costs[i][1]

  return result
};

[
  [[10,20],[30,200],[400,50],[30,20]],
  [[518,518],[71,971],[121,862],[967,607],[138,754],[513,337],[499,873],[337,387],[647,917],[76,417]],
].forEach(costs => {
  console.log(twoCitySchedCost(costs))
})
