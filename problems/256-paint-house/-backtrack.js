/**
 * Backtrack
 */
let result

var minCost = function(costs) {
  result = Infinity
  helper(costs, 0, -1, 0)
  return result
};

function helper (costs, house, lastColor, tmpResult) {
  if (house === costs.length) {
    result = Math.min(result, tmpResult)
    return
  }

  for (let color = 0; color <= 2; ++color) {
    if (color !== lastColor) { // 跟上一个房间不同颜色
      helper(costs, house + 1, color, tmpResult + costs[house][color])
    }
  }
}

[
  [[17,2,17],[16,16,5],[14,3,19]],
  [[3,5,3],[6,17,6],[7,13,18],[9,10,18]],
].forEach(arr => {
  console.log(minCost(arr))
})