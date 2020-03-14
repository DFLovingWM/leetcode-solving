/**
 * 排序
 * 
 * 时间：O(N^2 * logN), 92ms
 */
var rankTeams = function(votes) {
  const length = votes[0].length;
  const map = new Map();
  for (let i = 0; i < length; ++i) {
      for (let j = 0; j < votes.length; ++j) {
          const ch = votes[j][i];
          if (!map.has(ch)) {
              map.set(ch, Array.from({ length }, () => 0));
          }
          const freq = map.get(ch);
          ++freq[i];
      }
  }
  
  const arr = Array.from(map.keys());
  return arr.sort((a, b) => {
      const A = map.get(a);
      const B = map.get(b);
      for (let i = 0; i < length; ++i) {
          if (A[i] > B[i]) return -1;
          if (A[i] < B[i]) return 1;
      }
      return a.charCodeAt(0) - b.charCodeAt(0);
  }).join('');
};