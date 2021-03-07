/**
 * 数列
 */
var totalMoney = function(n) {
  const [round, remainder] = [Math.floor(n / 7), n % 7];
  return getSeqSum(28, 28 + (round - 1) * 7, round) + getSeqSum(round + 1, round + remainder, remainder);
};

function getSeqSum(head, tail, n) {
  return (head + tail) * n / 2;
}
