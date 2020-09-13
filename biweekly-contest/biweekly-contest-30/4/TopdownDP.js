/**
 * DP
 */
var winnerSquareGame = function(N) {
  const choice = new Set();
  for (let i = 1; i * i <= N; ++i) {
    choice.add(i * i);
  }

  const memo = new Map();

  function f(n) {
    if (n === 0) return false;
    if (choice.has(n)) return true; // 加速
    
    if (memo.has(n)) return memo.get(n);

    let win = false;
    for (const c of choice) {
      if (c > n) continue;
      if (!f(n - c)) {
        win = true;
        break;
      }
    }
    memo.set(n, win);
    return win;
  }

  return f(N);
};