/**
 * 贪心
 */
var reformat = function(s) {
  let A = []
  let B = [];
  for (const ch of s) {
    if (ch >= '0' && ch <= '9') {
      A.push(ch);
    } else {
      B.push(ch);
    }
  }

  const d = Math.abs(A.length - B.length);
  if (d > 1) return '';

  if (A.length < B.length) {
    [A, B] = [B, A];
  }
  let res = [];
  let i = 0;
  for (; i < B.length; ++i) {
    res.push(A[i]);
    res.push(B[i]);
  }
  if (i < A.length) {
    res.push(A[i]);
  }
  return res.join('');
};

[
  "a0b1c2",
  "leetcode",
  "1229857369",
  "covid2019",
  "ab123",
].forEach(S => {
  console.log(reformat(S));
})