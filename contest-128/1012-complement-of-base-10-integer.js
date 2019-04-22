/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return parseInt(flip(N.toString(2)), 2)
};

function flip (binaryString) {
  return Array.from(binaryString).map(char => {
    if (char === '0') return '1'
    return '0'
  }).join('')
};

// [
//   5,7,10
// ].forEach(n => {
//   console.log(bitwiseComplement(n))
// })