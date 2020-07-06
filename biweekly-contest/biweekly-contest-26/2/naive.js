/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  const res = [];
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j < i; ++j) {
      if (gcd(i, j) === 1) {
        res.push(`${j}/${i}`);
      }
    }
  }
  return res;
};

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

[
  2,3,4,1
].forEach(n=>{
  console.log(simplifiedFractions(n))
})