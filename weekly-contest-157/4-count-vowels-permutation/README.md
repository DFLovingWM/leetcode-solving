# 5216. 统计元音字母序列的数目

## 思路

类似于全排列，所以写法有：

- BFS
- 回溯/动态规划

复杂度分析：因为每一层都是5个元素（常数），每次加1个元音则迭代N次，故有O(N)。

如果数据量大，还涉及到“矩阵快速幂”这个数学知识点，参考[Lingo的题解](https://leetcode-cn.com/problems/count-vowels-permutation/solution/ju-zhen-kuai-su-mi-ju-zhen-yun-suan-gen-ju-gong-sh/)。
