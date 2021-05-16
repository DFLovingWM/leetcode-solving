# 恰有 K 根木棍可以看到的排列数目

## DP

组合数学，也是DP。

状态表示：设`dp[i][j]`表示「摆放`i`个木棍，能看到`j`个」的排列数。

状态转移：考虑最右的木棍：

1. 如果它能被看到，那么它一定是最高的那根（高度为`i`），那么它左边的排列数为：`dp[i-1][j-1]`
1. 如果它不能被看到，那么它的高度区间为`[1, i-1]`；并且对于区间的任何一种高度，它左边的概率都是相同的，那么排列总数为：`(i - 1) * dp[i-1][j]`

总结一下就是：

```js
dp[i][j] = dp[i-1][j-1] + (i-1) * dp[i-1][j]
```

边界：`dp[1][1]`为1

目标：`dp[n][k]`

空间优化：当前位置由左上、正上来推导，可以使用滚动数组/逆向更新使空间降低到一维。

## 拓展知识

该推导公式也是第一类Stirling数的公式。

更多可参考：[https://oi-wiki.org/math/stirling/](斯特林数)。

## 拓展题目

[HDU4372](http://acm.hdu.edu.cn/showproblem.php?pid=4372)