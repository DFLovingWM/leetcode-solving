/**
 * 哈希 + 排序
 */
var alertNames = function(keyNames, keyTimes) {
  const n = keyNames.length;
  const emp2Times = new Map();
  for (let i = 0; i < n; ++i) {
    const name = keyNames[i];
    const time = keyTimes[i];
    if (!emp2Times.has(name)) {
      emp2Times.set(name, []);
    }
    emp2Times.get(name).push(time2Timestamp(time));
  }

  const set = new Set();
  for (const [name, arr] of emp2Times) {
    arr.sort((a, b) => a - b);
    for (let i = 2; i < arr.length; ++i) {
      if (arr[i] - arr[i - 2] <= 60) {
        set.add(name);
      }
    }
  }

  return Array.from(set).sort();
};

function time2Timestamp(v) {
  const [h, m] = v.split(':').map(e => Number(e));
  return h * 60 + m;
}