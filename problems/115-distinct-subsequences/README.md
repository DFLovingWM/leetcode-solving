# 115. 不同的子序列

## 思路

动态规划。

- Top-down：考虑用`text`匹配`pattern`，逐个字符地
  - 状态表示：函数`int helper(int i, int j)`表示当前匹配到`text[i]`与`pattern[j]`对应最终的匹配数
  - 状态转移：对于每个状态，至多有“不匹配”(随时)、以及“匹配”(相等才可以)这2种选择，即有：`helper(i,j) => helper(i+1,j) + helper(i+1,j+1)`
- Bottom-up：考虑用`text[:i]`匹配`pattern[:j]`，将`text[i-1]`当作可用的新字符
  - 状态表示：`dp[i][j]`表示`text[:i]`与`pattern[:j]`的匹配数
  - 状态转移：如果不使用新字符，则始终可以加上`dp[i-1][j]`；如果使用新字符来匹配（前提是新字符等于`pattern[j-1]`），则还可以加上`dp[i-1][j-1]`

