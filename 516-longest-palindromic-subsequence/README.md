# 516. 最长回文子序列

## 思路

动态规划。子思路有2种：

- 直接DP：`dp[i][j]`表示`S[i:j]`中LPS的长度，则有如下推导式（类似于求“最长回文子串”，是从中间向两边扩展）。注意i是逆序推导、j为顺序：

```js
if (S[i] === S[j]) {
  dp[i][j] = dp[i + 1][j - 1] + 2
} else {
  dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
}
```

- 间接DP：转化为求`S`与逆串`S2`的LCS

## 反思总结

最长回文子序列（LPS）的模板题。十分相似的题目有：

- [1216. 验证回文字符串 III](https://leetcode-cn.com/problems/valid-palindrome-iii/)
