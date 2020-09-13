/**
 * DP
 */
var countRoutes = function(locations, start, finish, fuel) {
  const mod = 1e9 + 7;
  const memo = new Map();

  function helper(currIndex, currFuel) {
    const key = `${currIndex},${currFuel}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    if (currIndex === finish) {
      ++res;
    }

    for (let i = 0; i < locations.length; ++i) {
      if (currIndex === i) continue;
      const nextFuel = currFuel - Math.abs(locations[i] - locations[currIndex]);
      if (nextFuel >= 0) {
        res += helper(i, nextFuel);
        res %= mod;
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(start, fuel);
};
