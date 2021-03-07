/**
 * 贪心/排序
 * 
 * 时间：O(NlogN), 136ms
 */
var candy = function(ratings) {
  const n = ratings.length;
  // 下标数组
  const iList = Array
    .from({ length: n }, (_, i) => i)
    .sort((i, j) => (
      ratings[i] - ratings[j]
    ));
  // 糖果分配数组
  const candies = Array.from({ length: n }, () => 0);
  for (const i of iList) {
    const need = 1 + Math.max(
      i - 1 >= 0 && ratings[i - 1] < ratings[i] ? candies[i - 1] : 0, // 如果左边更小，则要考虑上
      i + 1 < n && ratings[i + 1] < ratings[i] ? candies[i + 1] : 0 // 如果右边更小，则也要考虑上
    );
    candies[i] = need;
  }
  return candies.reduce((acc, e) => acc + e, 0);
};