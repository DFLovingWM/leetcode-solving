/**
 * 题意不清晰
 */
var checkOnesSegment = function(s) {
  let i;
  for (i = 0; i < s.length; ++i) {
    if (s[i] === '0') {
      break;
    }
  }
  for (; i < s.length; ++i) {
    if (s[i] === '1') {
      return false;
    }
  }
  return true;
};