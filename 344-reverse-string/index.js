/**
 * 头尾指针，比单指针简便很多
 * O(N)，S(1)
 */
var reverseString = function(chars) {
  let [L, R] = [0, chars.length - 1]
  while (L < R) {
    [chars[L], chars[R]] = [chars[R], chars[L]];
    ++L
    --R
  }
};
