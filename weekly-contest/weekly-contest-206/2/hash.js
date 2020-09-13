/**
 * 按照题意来，借助Map
 */
var unhappyFriends = function(n, preferences, pairs) {
  // 配对Map
  const pair = new Map();
  for (const [a, b] of pairs) {
    pair.set(a, b);
    pair.set(b, a);
  }

  // 友好次序Map
  const preferenceList = [];
  for (let i = 0; i < n; ++i) {
    preferenceList.push(getMap(preferences[i]));
  }

  let res = [];
  for (let i = 0; i < n; ++i) {
    const j = pair.get(i);
    let happy = true;
    // 检测在 j 之前的所有(更好的)朋友
    for (const x of preferences[i]) {
      if (x === j) break;
      const y = pair.get(x);
      // 对x来说，检测是否 i -> y
      const p = preferenceList[x];
      if (p.get(i) < p.get(y)) {
        happy = false;
        break;
      }
    }
    if (!happy) {
      res.push(i);
    }
  }
  return res.length;
};

// 反向映射
function getMap(arr) {
  const res = new Map();
  for (let i = 0; i < arr.length; ++i) {
    res.set(arr[i], i);
  }
  return res;
}
