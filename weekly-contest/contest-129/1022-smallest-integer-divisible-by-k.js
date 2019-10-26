/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
  if (K % 2 === 0) return -1

  let result = 1
  while (result % K !== 0) {
    result = Number('1' + result)
  }
  console.log('result:', result)
  return String(result).length
};

/**
 * Big-integer division.
 */
function divideBy (x, y) {
  
}

[
  1,
  2,
  3,
  19
].forEach(K => {
  console.log( smallestRepunitDivByK( K ) )
})