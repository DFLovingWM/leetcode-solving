/**
 * 暴力
 */
var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map(e => e + extraCandies >= max);
};

[
  [[2,3,5,1,3], 3],
  [[4,2,1,1,2], 1],
  [[12,1,12], 10],
].forEach(A => {
  console.log(kidsWithCandies(...A))
})