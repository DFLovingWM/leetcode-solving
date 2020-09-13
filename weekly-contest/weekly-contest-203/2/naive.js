/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a, b) => a - b);
  const K = piles.length / 3;
  let res = 0;
  let i = piles.length - 2;
  for (let k = 0; k < K; ++k) {
    res += piles[i];
    i -= 2;
  }
  return res;
};