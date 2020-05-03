/**
 * 贪心
 */
var checkIfCanBreak = function(A, B) {
  return check(A, B) || check(B, A);
};

function check(A, B) {
  const fa = Array.from({ length: 26 }, () => 0);

  for (const ch of A) {
    ++fa[code(ch)];
  }

  for (const ch of B) {
    let i;
    for (i = code(ch); i < 26; ++i) { // 从ch～z放
      if (fa[i] > 0) {
        --fa[i];
        break;
      }
    }
    if (i >= 26) return false;
  }
  return true;
}

function code(ch) {
  return ch.charCodeAt(0) - 'a'.charCodeAt(0);
}

module.exports = checkIfCanBreak;