/**
 * 化为3进制
 * 调用JS API
 */
var checkPowersOfThree = function(n) {
  return Array.from(n.toString(3)).every(e => e !== '2');
};