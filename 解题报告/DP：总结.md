# 动态规划

## 定义

用于寻找多策略下的最优解：

- 当前局面是由上一个选择造成的，并且当下选择也会影响之后的局面与选择。
- 局部最优不一定导致全局最优。在未知最终最优结果的情况下，需要求解所有的子问题。

## 类比

计算机的能力之一在于穷举，算法层次为：

- 回溯：需要求出所有的策略。复杂度为阶乘级或指数级。
- 动态规划：只需要求出所有策略下的最值，并且状态可复用。复杂度为多项式级别。
- 贪心：全局最优取决于局部最优。复杂度为线性级别。

在实际题目中，往往分不清究竟用回溯还是用DP，这里提一个注意事项：

- 求具体方案一般用回溯，但求最优方案时可能是DP。因为就算值是数组类型，也可以通过数组的拷贝来实现“迭代累加”。题目：
  - [96. 不同的二叉搜索树](https://leetcode-cn.com/problems/unique-binary-search-trees/)、[95. 不同的二叉搜索树 II](https://leetcode-cn.com/problems/unique-binary-search-trees-ii/)
  - [1125. 最小的必要团队](https://leetcode-cn.com/problems/smallest-sufficient-team/)
- 求方案数不一定就是DP。当状态难以哈希时，只能用回溯求。题目：
  - [52. N皇后 II](https://leetcode-cn.com/problems/n-queens-ii/)

## 细分

动态规划，又可细分为：

- Top-down（递归 + 记忆化）：`curr ==> next`
  - 更好理解，通常先思考出来。
  - 思考点：回溯算法、状态转移、递归终止条件。
  - 缺点：虽然复杂度一样，但系统栈花销导致它通常比Bottom-up慢一点。并且当n较大时，栈溢出。
- Bottom-up（迭代）：`curr <== prev`
  - 通常是后想出来，作为对Top-down的进一步优化（时效、空间压缩）。空间压缩方式：滚动数组/逆序更新。
  - 思考点：初始条件（对应Top-down中的递归终止条件）、状态转移方程，以及迭代的方向。与Top-down是反过来的。
  - 缺点：时效通常较好，但是当有效子问题较少时会比Top-down还慢，因为Top-down只会选择合法策略，但Bottom-up会计算所有（下标有效的）子问题，不管它是否有效。
  - 通常用数组表示状态，所以下标不能为负数。遇到需要用负数表示的状态，可能需要用到哈希表之类的结构。

于是可以认为“入参列表 == 下标”。

优化：当第`i`行仅由第`i-1`行推导而来时，有以下优化方法：

- 空间优化
  - 滚动数组/逆序遍历（仅适用于类似背包的问题，待定）
  - 层次推导：类似于层次遍历(BFS)，只是由`curr <== prev`变为`curr ==> next`，本质一样，写出来的代码与“使用滚动数组”几乎没区别
- 时间优化
  - 矩阵快速幂：`O(N) => O(logN)`，重难点

## 解题步骤

1. 思考回溯法（偏朴素算法）的大致思路，然而TLE。
1. Top-down DP：发现子问题可以用基本类型的变量表示出来、并且有重叠，于是用多维数组/哈希表来缓存子问题的结果，变成记忆化搜索。能够AC，但实际时效往往不是太好。
1. Bottom-up DP：优化时间与空间，沿用Top-down的状态转移，设计dp数组、确定初始状态、确认循环方式。

## 常用技巧

- 位压缩
  - 枚举策略（常用二进制）
    - [1239. 串联字符串的最大长度](https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)
    - [1255. 得分最高的单词集合](https://leetcode-cn.com/problems/maximum-score-words-formed-by-letters/)
    - [1284. 转化为全零矩阵的最少反转次数](https://leetcode-cn.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/)
  - 将复合状态简单化（哈希化/下标化），即“状压DP”
    - [980. 不同路径 III](https://leetcode-cn.com/problems/unique-paths-iii/)
    - [638. 大礼包](https://leetcode-cn.com/problems/shopping-offers/)
- 离散化：因为DP使用下标表示状态，所以当状态涉及到的数字较大时，往往无法进行DP。而离散化可以“压缩”数据，将下标缩小到可接受范围内。

## 与BFS的联系

Bottom-up DP（从后往前推导）与BFS（从前往后推导）的联系，通常有两种：

1、滚动数组

当`f(n+1)`只依赖于`f(n)`时，DP可使用滚动数组达到空间优化，相当于层次遍历（但推导方向可能相反）。

- [1220. 统计元音字母序列的数目](https://leetcode-cn.com/problems/count-vowels-permutation/)
- [1262. 可被三整除的最大和](https://leetcode-cn.com/problems/greatest-sum-divisible-by-three/)

2、最短路问题

最短路问题是搜索问题的特殊化。“搜索”一般指在有限的状态空间中遍历，而最短路问题寻找的是最优的遍历路径，如果用BFS可以保证路径的最短；但如果用DFS，因为无法确保当前路径是最优的，只能对每个状态进行迭代（用数组保存当前最优答案）。所以，当拓扑序明确的情况下，BFS去重/剪枝所用的`visit/dist`标记数组，相当于DP的`dp`数组。关于最短路问题，详见本目录《最短路径问题》一章。

- [1293. 网格中的最短路径](https://leetcode-cn.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/)
- [1320. 二指输入的的最小距离](https://leetcode-cn.com/problems/minimum-distance-to-type-a-word-using-two-fingers/)

可以认为“入参列表 == 结构体状态”。

## 题型

- 背包问题
  - 系列见《AcWing-solving》
- “动态”区间问题（难）：
  - [312. 戳气球](https://leetcode-cn.com/problems/burst-balloons/)
