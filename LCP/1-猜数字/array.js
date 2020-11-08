/**
 * 水题，判断两个数组的值是否相等
 */
var game = function(guess, answer) {
  let res = 0
  for (let i = 0; i < guess.length; ++i) {
    if (guess[i] === answer[i]) ++res
  }
  return res
};