/**
 * 贪心 + 正则（栈不行）
 */
var maximumGain = function(s, x, y) {
  const seqs = [
    ['ab', x],
    ['ba', y]
  ];
  seqs.sort((A, B) => B[1] - A[1]);

  let res = 0;
  while (true) {
    let match = false;
    for (const [seq, score] of seqs) {
      const i = s.indexOf(seq);
      if (i !== -1) {
        match = true;
        res += score;
        s = s.slice(0, i) + s.slice(i + 2);
        break;
      }
    }
    if (!match) break;
  }
  return res;
};

[
  ["cdbcbbaaabab",4,5],
  ["aabbaaxybbaabb",5,4],
].forEach(A => {
  console.log(maximumGain(...A))
  console.log();
})