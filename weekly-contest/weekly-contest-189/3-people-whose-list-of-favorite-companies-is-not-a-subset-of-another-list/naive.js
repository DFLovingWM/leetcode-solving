/**
 * 暴力 + 哈希表
 * 
 * 时间：O(N^2 * M), 224ms
 */
var peopleIndexes = function(favoriteCompanies) {
  const res = [];
  const n = favoriteCompanies.length;
  // 先将全部数组转换为集合
  const sets = favoriteCompanies.map(l => new Set(l));

  function isSubset(A, B) {
    if (A.size > B.size) return false;
    for (const e of A) {
      if (!B.has(e)) return false;
    }
    return true;
  }

  // 暴力（二重）遍历
  for (let i = 0; i < n; ++i) {
    let ok = true;
    for (let j = 0; j < n; ++j) {
      if (j === i) continue;
      if (isSubset(sets[i], sets[j])) {
        ok = false;
        break;
      }
    }
    if (ok) res.push(i);
  }

  return res;
};

[
  [["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]],
  [["leetcode","google","facebook"],["leetcode","amazon"],["facebook","google"]],
  [["leetcode"],["google"],["facebook"],["amazon"]],
].forEach(A=>{
  console.log(peopleIndexes(A))
})