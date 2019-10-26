/**
 * 2种选择取更小
 */
var distanceBetweenBusStops = function(distance, from, to) {
  const sum = distance.reduce((a, b) => a + b, 0)

  if (from > to) {
    [from, to] = [to, from]
  }
  let a = 0
  for (let i = from; i < to; ++i) {
    a += distance[i]
  }

  return Math.min(sum - a, a)
};

[
  [[1,2,3,4], 0, 1],
  [[1,2,3,4], 0, 2],
  [[1,2,3,4], 0, 3],
  [[7,10,1,12,11,14,5,0], 7, 2],
].forEach(input => {
  console.log(distanceBetweenBusStops(...input))
})