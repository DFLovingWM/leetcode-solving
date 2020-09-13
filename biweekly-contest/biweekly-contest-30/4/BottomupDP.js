/**
 * DP
 */
var winnerSquareGame = function(N) {
  const choices = [];
  for (let i = 1; i * i <= N; ++i) {
    choices.push(i * i);
  }
  const choiceSet = new Set(choices);

  // dp[i]表示Alice的结果
  const dp = Array.from({ length: N + 1 }, () => false);
  dp[0] = false;
  dp[1] = true;

  for (let i = 2; i <= N; ++i) {
    if (choiceSet.has(i)) {
      dp[i] = true;
      continue;
    }
    // 找到输的prev
    for (const d of choices) {
      if (i - d >= 0 && !dp[i - d]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[N];
};