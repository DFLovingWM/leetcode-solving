/**
 * 哈希
 */
var isPathCrossing = function(path) {
  const dir = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1]
  };

  let r = 0, c = 0;
  const visit = new Set();
  visit.add(getKey(r, c));

  for (const ch of path) {
    const [ro, co] = dir[ch];
    r += ro;
    c += co;
    const key = getKey(r, c);
    if (visit.has(key)) {
      return true;
    }
    visit.add(key);
  }

  return false;
};

function getKey(r, c) {
  return `${r}|${c}`;
}