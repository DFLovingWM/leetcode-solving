# 894. 所有可能的满二叉树

## 思路

回溯 + 备忘录 => 动态规划。解法有点类似于[95. 不同的二叉搜索树 II](https://leetcode-cn.com/problems/unique-binary-search-trees-ii/)。

设`f(n)`表示`n`个结点构成的所有树(数组)，则状态转移：

```js
f(n) => f(i) * f(n - 1 - i) // i为遍历n
```

递归终止条件有2个：

- 当`n=1`时，返回单个结点组成的数组
- 当`n`为偶数时，是不可能构成“满二叉树”的，所以返回空数组

## 相似题目

- [95. 不同的二叉搜索树 II](https://leetcode-cn.com/problems/unique-binary-search-trees-ii/)
