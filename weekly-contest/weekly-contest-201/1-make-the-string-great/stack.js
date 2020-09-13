/**
 * stack
 * 
 * 时间：O(N)
 */
var makeGood = function(s) {
  const stack = [];
  for (const ch of s) {
    if (stack.length > 0 && isBad(ch, stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');
};

function isBad(a, b) {
  // 97 - 65 => 32
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 32;
}