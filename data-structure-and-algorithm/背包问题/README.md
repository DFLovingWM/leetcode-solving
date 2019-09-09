# 背包问题（Knapsack）

如果从【条件，结果】这个角度切入：

- 结果：一般求的是最大价值。少数有求组合数的，在此暂不讨论。
- 条件：分为3种类型：
  - 01背包：每种物品只有 1 个。只能决定拿和不拿，即[0, 1]。
  - 完全背包：每种物品有无限个。可以拿任意个，即[0, C / ci]，其中 C 为背包总容量，ci 为每个物品的代价。
  - 多重背包：每种物品有 N 个。可以拿[0, N]个。

综上，所谓“背包问题”就是结果固化了、更狭义的DP。

## 1. 01背包

### 顺序二维数组

f(i, j) 表示对于前 i 个物品，容量为 j 的背包能达到的最大价值，则有伪代码：

```js
for i = range[1, N]
  for j = range[0, cost[i])
    f[i][j] = f[i - 1][j]
  for j = range[cost[i], V]
    f[i][j] = Math.max( f[i - 1][j], f[i - 1][j - cost[i]] + value[i] )
```

假设总共有 N 个/种物品，背包总容量为 V，则其复杂度为：

- 空间复杂度：O(N * V)
- 时间复杂度：O(N * V)

### 优化：逆序一维数组

目的是使用一维数组，可以

对于二维数组，将物品想象成 N 行，容量想象成 V 列，最终我们找最大值的时候，也只是在第 N 行中找罢了。所以直觉告诉我们，其实迭代的过程也可以只在一行中进行，这样空间复杂度就可以优化成 O(V) 了。为了需要保证 f(j) 能代替 f(i, j)，根据迭代的过程(可以画一画)可知，需要调整为对容量进行逆序遍历。

伪代码为：

```js
for i = range[1, N]
  for v = range[V, cost[i]]
    f[v] = Math.max( f[v], f[v - cost[i]] + value[i] )
```

## 2. 完全背包

每一种物品是无限的，我们的思路是：对于容量为V的背包而言，寻找它所有“上一个状态”，选出最大值，然后加上。具体编码中，只需要一维数组，以及二重循环：

```js
f[0] = 0
for (let v = 1; v <= V; ++v) { // 往后递推每一个容量，直到目标容量V
  let max = -Infinity
  for (let i = 0; i < volumes.length; ++i) { // 遍历每一个“上一个状态”，找出最大价值的
    if (v - cost[i] >= 0) {
      max = Math.max(max, f[v - volumes[i]] + values[i])
    }
  }
  f[v] = max
}
```

### 题目

- [377. 组合总和4](https://leetcode-cn.com/problems/combination-sum-iv/)

## 3. 多重背包

## 参考

- [背包问题九讲](https://www.kancloud.cn/kancloud/pack/70124)
- [动态规划：背包问题(1)](https://www.cnblogs.com/A-S-KirigiriKyoko/p/6036368.html)
