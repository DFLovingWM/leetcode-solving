# 5216. 统计元音字母序列的数目

## 思路

类似于求全排列的数量。

### O(N)解法

- 动态规划：状态为两个变量：字母`curr`（上一个字母、或者当前字母）、次数`n`（剩余次数、或者已用次数）
  - top-down
  - bottom-up
- BFS：因为第n层的数量只依赖于第(n-1)层，所以可以进行层次遍历。不过这里更简单，不需要queue，只需要5个变量，因为每一层最多5个元素（aeiou）。也算是Bottom-up DP的另一种理解。
- 矩阵

### O(logN)解法

- 矩阵快速幂。参考[Lingo的题解](https://leetcode-cn.com/problems/count-vowels-permutation/solution/ju-zhen-kuai-su-mi-ju-zhen-yun-suan-gen-ju-gong-sh/)。
