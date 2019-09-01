/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
  sticks.sort((a, b) => a - b)

  let res = 0
  let sum = sticks[0]
  for (let i = 1; i < sticks.length; ++i) {
    sum += sticks[i]
    res += sum
  }
  return res
};

[
  [2,4,3],
  [1,8,3,5]
].forEach(arr => {
  console.log(connectSticks(arr))
})
