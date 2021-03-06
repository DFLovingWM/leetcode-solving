# 动态规划：最长公共子序列问题系列

## 标题含义

不知道要起一个如何统一的名字，于是加个“系列”二字，防止过度歧义。这里的系列问题包括但不限于：

- 子序列【重点】
  - 最长公共子序列
  - 最长回文子序列
  - 最长上升/递增子序列
  - 最短公共超序列
- 子串/数组【非重点】
  - 最长公共子串
  - 最长回文子串
  - 最短公共超串

注意，本篇只讨论求“最大/最小长度”。对于具体的子序列/子串，其实可以反推或追溯出来，这里暂且不讨论。

## 子序列问题

### 最长公共子序列

题目：

- [1143. 最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/)，模板题
- [72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/)
- [583. 两个字符串的删除操作](https://leetcode-cn.com/problems/delete-operation-for-two-strings/)

DP思路：

- 状态表示：`dp[i][j]`表示`A[:i]`和`B[:j]`的公共子序列的最大长度
- 状态转移：

```js
// 将A[i-1]、B[j-1]看作“新来”的两个字符
if (A[i - 1] === B[j - 1]) { // 相等时，加上该字符长度
  dp[i][j] = dp[i - 1][j - 1] + 1
} else { // 不相等时无法增加长度，但因为是“序列”，可以取更大者
  dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
}
```

- 边界：`i===0 || j===0`时为0
- 目标：`dp[A.length][B.length]`

### 最长回文子序列

模板题：[516. 最长回文子序列](https://leetcode-cn.com/problems/longest-palindromic-subsequence/)。

思路一：直接求LPS

- 状态表示：`dp[i][j]`表示`S[i:j]`的回文子序列的最大长度
- 状态转移：

```js
// 向两边扩展到S[i]和S[j]
if (S[i] === S[j]) { // 相等，回文长度增加2个字符
  dp[i][j] = dp[i + 1][j - 1] + 2
} else { // 不相等，取前面的更大者
  dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
}
```

- 边界
  - 奇数回文：`dp[i][i] = 1`
  - 偶数回文：`dp[i][j] = 0`，当`i > j`
- 目标：`dp[n][n]`

思路二：先求LCS，再求LPS

基于思想：LPS = S与逆S的LCS。

### 最长上升/递增子序列

300

### 最短公共超序列

模板题：[1092. 最短公共超序列](https://leetcode-cn.com/problems/shortest-common-supersequence/)，不过它是求具体的子串。

思路一：直接求SCS。

- 状态表示：`dp[i][j]`表示`A[:i]`和`B[:j]`的公共超序列的最小长度
- 状态转移：

```js
// 将A[i-1]、B[j-1]看作“新来”的两个字符
if (A[i - 1] === B[j - 1]) { // 相等时，只能加上该字符1个长度
  dp[i][j] = 1 + dp[i - 1][j - 1]
} else { // 不相等时，必须得加1个字符，选择更小者然后加上
  dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1])
}
```

- 边界：`dp[0][j] = j`与`dp[i][0] = i`
- 目标：`dp[A.length][B.length]`

思路二：先求LCS，再求SCS。

基于容斥原理：SCS = A.length + B.length - LCS。

## 子串问题

### 最长公共子串

模板题：[718. 最长重复子数组](https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/)。

与子序列的思路差不多。因为是子串，筛选条件更严格了一些，但是代码更简单了：

- 状态表示：`dp[i][j]`表示以`A[i-1]`、`B[j-1]`结尾的子串的最大长度
- 状态转移：

```js
// 以A[i-1]结尾、也以B[j-1]结尾
if (A[i - 1] === B[j - 1]) { // 相等时，长度加1
  dp[i][j] = dp[i - 1][j - 1] + 1
} else { // 不相等时，不可能以2个字符结尾，所以长度为0
  dp[i][j] = 0
}
```

- 边界：`i===0 || j===0`时为0
- 目标：`max(dp)`

### 最长回文子串

其实求最长回文子串的常规算法，并没有DP：

- 中心扩展：有递推的味道，但严格来说不算DP
- Manacher算法

这里就不展开了。

### 最短公共超串

@todo 没见过，待完善。
