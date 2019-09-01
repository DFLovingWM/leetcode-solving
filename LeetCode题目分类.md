# 大分类

- permutations: 46, 47，31, 556
- Lowest Common Ancestor: 235, 236
- N Sum问题：1、15、18

## 前缀和的应用

- 560：典型，子数组的和
- 974：稍微变形，和变为整除
- 437：二叉树中，子路径的和

## K sum问题

思路：

- 排序 + 递归 + 双指针

题目：

- K sum问题：递归 + two pointers
- sum问题：bitset/母函数/背包
- Sub-array sum/product问题：
  - 等于K：即相等搜索，prefix sum + O(1)查找。
    - 基础：[560](https://leetcode.com/problems/subarray-sum-equals-k/)
    - 二叉树上的prefix sum：[437. Path Sum III](https://leetcode.com/problems/path-sum-iii/)
  - 小于或大于K：即范围搜索。[713](https://leetcode.com/problems/subarray-product-less-than-k/solution/)
    - binary search，O(logN)
    - sliding window
  - 等于K的倍数。[523](https://leetcode.com/problems/continuous-subarray-sum/)
    - prefixs sum。正常遍历需要O(M)或O(N)，不过可以使用mod优化为O(1)

## 子数组问题

问法：

子数组的【和/积】【等于/大于/小于】K的【个数/是否存在/最长长度/最短长度】

思路：

- 前缀和，形式有：
  - 哈希（Map/Set）：适用于精准搜索（等于K）的情况。复杂度为O(N)
  - 二分查找（数组）：（前缀和数组，按序插入本身就是递增的数组，所以可以用二分查找）适用于范围搜索的情况。复杂度为O(NlogN)
- 滑动窗口：适用于范围搜索的情况。复杂度为O(N)

题目：

- [560. 和为K的子数组，求个数](https://leetcode-cn.com/problems/subarray-sum-equals-k/)
- [325. 和为K的子数组，求最长长度](https://leetcode-cn.com/problems/maximum-size-subarray-sum-equals-k/)
- [523. 和为nK的连续子数组，求是否存在](https://leetcode-cn.com/problems/continuous-subarray-sum/submissions/)
- [713. 积小于K的子数组，求个数](https://leetcode-cn.com/problems/subarray-product-less-than-k/)
- [209. 和大于等于K的子数组，求最小长度](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

## 判断重复元素问题

- 217
- 219
- 220

## 数组删除元素问题

- 27、删除目标元素
- 26、删除重复元素
- 80、减少重复元素

## 变形的二分查找

- [1095. 山脉数组中查找目标值](https://leetcode-cn.com/problems/find-in-mountain-array/)
- [153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
- [33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)
- [154. 寻找旋转排序数组中的最小值 II](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)
- [81. 搜索旋转排序数组2（有重复元素）](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/submissions/)

## 背包问题（Knapsack）

- 01背包
- 完全背包（只是值表示的意义不同）
  - 322
  - 518
- 多重背包

## 分段问题

875 774 410

## Next Greater问题：stack的应用

- 基础：739、1019
- 扩展：496、503

## 悬而未决

- [118. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
  - 朴素解法虽然比较慢，但有扩展性(3段 => K段)
- [437: Path Sum III](https://leetcode.com/problems/path-sum-iii/discuss/91889/Simple-Java-DFS)该解法(很简洁但没看出原理)。
- [336：Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/discuss/79195/O(n-*-k2)-java-solution-with-Trie-structure)，Trie解法。
- [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/discuss/10127/An-iterative-method.)DP解法。
- [1008](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/discuss/252232/JavaC++Python-O(N))：存在O(HlogN)乃至O(N)解法？时间复杂度分析是否错了？

## 666的解法

- 55：贪心解法，将`bottom-up DP`优化成线性复杂度
