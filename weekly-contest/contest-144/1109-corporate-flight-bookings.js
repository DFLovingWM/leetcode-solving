/**
 * O(N2)
 */
var corpFlightBookings = function(bookings, n) {
  let ret = Array.from({ length: n + 1 }, () => 0)
  for (const [from, to, count] of bookings) {
    for (let i = from; i <= to; ++i) {
      ret[i] += count
    }
  }
  return ret.slice(1)
};

/**
 * O(N)
 */
var corpFlightBookings = function(bookings, n) {
  const delta = Array.from({ length: n + 2 }, () => 0)
  for (const [from, to, count] of bookings) {
    delta[from] += count
    delta[to + 1] -= count
  }

  let sum = 0
  const ret = []
  for (let i = 1; i <= n; ++i) {
    sum += delta[i]
    ret.push(sum)
  }
  return ret
};

[
  [[[1,2,10],[2,3,20],[2,5,25]], 5],
].forEach(input => {
  console.log(corpFlightBookings(...input))
})