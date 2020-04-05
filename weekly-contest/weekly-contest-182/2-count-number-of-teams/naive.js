/**
 * 暴力
 * 
 * 时间：O(N^3), 92ms
 */
var numTeams = function(rating) {
  const n = rating.length;
  let res = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      for (let k = j + 1; k < n; ++k) {
        if (satisfy(rating, i, j, k)) {
          ++res;
        }
      }
    }
  }
  return res;
};

function satisfy(rating, i, j, k) {
  return (rating[i] < rating[j] && rating[j] < rating[k]) ||
    (rating[i] > rating[j] && rating[j] > rating[k]);
}