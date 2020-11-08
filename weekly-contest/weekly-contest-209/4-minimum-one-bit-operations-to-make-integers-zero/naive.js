/**
 * DP
 */
var minimumOneBitOperations = function(N) {
  const memo = new Map();

  function helper(n) {
    if (n === 0) return 0;
    if (memo.has(n)) return memo.get(n);

  }

  return helper(N);
};

function flip1(n) {
  return n ^ 1;
}

function flip2(n) {
  
}