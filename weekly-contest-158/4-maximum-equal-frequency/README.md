# 1224. Maximum Equal Frequency

## 题意

给定一个数组，找出最长“前缀”。“前缀”的定义：存在一个数字，当它被删除后，剩余所有数字的个数相等。

## 思路

考点：

- 哈希表的应用
- 边界条件

维护两个HashMap，一个记录每个数字出现的个数`count`，一个记录每个个数出现的次数`freq`。同时记录最大次数`maxCount`。

从头开始遍历数组，如果存在下面几种情况之一，就满足前缀条件：

1. Case 1：只有一个数字的个数为1，其它数字的个数为`maxCount`。删除该数字后，不会产生新频次。对应的条件是`maxCount * freq[maxCount] === i`。
1. Case 2：只有一个数字的个数为`maxCount`，其它数字的个数都为`maxCount - 1`。删除该数字后，产生的新频次会合并。对应的条件是`(maxCount - 1) * (freq[maxCount - 1] + 1) === i`。
1. Case 3：是Case 1的特殊情况，比如`[1,2,3,4]`，所有数字的个数都为1，删除任意一个都不会产生新频次。对应条件`maxCount === 1`。

这里的优化之处在于`maxCount`的应用，如果没有该变量，需要O(N^2)时间。

最好举一些有代表性的例子，比如：

```js
[1,1,2,2,3,3,5]
[1,1,2,2,3,3,5,5,5]
[1,2,3,4]
```

## 参考

[Easy Python Solution, Concise 10 lines, Explained, O(N)](https://leetcode.com/problems/maximum-equal-frequency/discuss/403628/Easy-Python-Solution-Concise-10-lines-Explained-O(N))
