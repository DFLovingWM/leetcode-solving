/**
 * Hash
 */
var numPairsDivisibleBy60 = function(times) {
  let count = new Map()
  let result = 0

  for (let i = 0; i < times.length; ++i) {
    let time = times[i] % 60
    for (let key of count.keys()) {
      if ((time + key) % 60 === 0) {
        result += count.get(key)
      }
    }
    count.set(time, (count.get(time) || 0) + 1)
  }

  return result
};

// [
//   [30,20,150,100,40],
//   [60,60,60]
// ].forEach(n => {
//   console.log(numPairsDivisibleBy60(n))
// })