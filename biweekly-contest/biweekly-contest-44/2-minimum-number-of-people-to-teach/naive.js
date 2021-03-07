/**
 * 暴力(注意: 需要多次使用Set去重)
 * 
 * 时间：O(N^2), 252ms
 */
var minimumTeachings = function(n, languages, friendships) {
  const languageNum = n;
  const peopleNum = languages.length;

  // 预处理成Set
  const languageSets = languages.map(l => (
    new Set(l)
  ));
  // 提早处理好「可通信关系」
  const intersect = friendships.map(([a, b]) => (
    isIntersect(languageSets[a - 1], languageSets[b - 1])
  ))

  // 枚举：每一种语言，看需要教多少人
  let res = peopleNum;
  for (let l = 1; l <= languageNum; ++l) {
    // 对于同一个人，他可能出现在多段友谊中，但只需要教一次。所以要对「人」去重
    const needTeachSet = new Set();
    for (let i = 0; i < friendships.length; ++i) {
      let [a, b] = friendships[i];
      --a;
      --b;
      const A = languageSets[a];
      const B = languageSets[b];

      // 这条边已经存在，就不用管了
      if (intersect[i]) continue;

      // 看要教哪个
      if (!A.has(l)) needTeachSet.add(a);
      if (!B.has(l)) needTeachSet.add(b);
    }
    res = Math.min(res, needTeachSet.size);
  }

  return res;
};

// 是否有交集
function isIntersect(aSet, bSet) {
  for (const n of aSet) {
    if (bSet.has(n)) {
      return true;
    }
  }
  return false;
}
