# LeetCode题目分类

分类的根据

- 根据题型来分
- 根据思路/解法/算法来分
- 根据数据结构来分

LeetCode网站已经实现了这种多维度的分类。在这里我们主要根据题型来分。

## 未分类

Lowest Common Ancestor: 235, 236

## 前缀和的应用

- 560：典型，子数组的和
- 974：稍微变形，和变为整除
- 437：二叉树中，子路径的和

## K-Sum问题

K个数之和为sum的问题。其中，K是确定的。

思路：

通用解法：排序 + 回溯剪枝 + 双指针(等值、非等值搜索)/Hash(等值搜索)
时间复杂度：O(N ^ (K - 1))

题目：

- [1. 两数之和(K=2)](https://leetcode-cn.com/problems/two-sum/)
- [15. 三数之和(K=3)](https://leetcode-cn.com/problems/3sum/)
- [18. 四数之和](https://leetcode-cn.com/problems/4sum/)
- [216. 组合总和3(其实是K-sum问题)](https://leetcode-cn.com/problems/combination-sum-iii/submissions/)
- [259. 三数之和小于K](https://leetcode-cn.com/problems/3sum-smaller/)

题目：

- sum问题：bitset/母函数/背包
- Sub-array sum/product问题：
  - 等于K：即相等搜索，prefix sum + O(1)查找。
    - 基础：[560](https://leetcode.com/problems/subarray-sum-equals-k/)
    - 二叉树上的prefix sum：[437. Path Sum III](https://leetcode.com/problems/path-sum-iii/)

## 子数组问题

问法：

子数组的【和/积】【等于/大于/小于】K的【个数/是否存在/最长长度/最短长度】

思路：

- 前缀和，形式有：
  - 哈希（Map/Set）：适用于等值搜索，O(N)时间
  - 二分查找（数组）：适用于前缀和数组单调的范围搜索。复杂度为O(NlogN)。当不单调的时候，就用不上了（862）。
- 滑动窗口：适用于范围搜索，O(N)

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

- [27. 删除目标元素](https://leetcode-cn.com/problems/remove-element/)
- [26. 删除重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
- [80. 减少重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/)

## 二分查找进阶

- [1095. 山脉数组中查找目标值](https://leetcode-cn.com/problems/find-in-mountain-array/)
- [153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
- [33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)
- [154. 寻找旋转排序数组中的最小值 II](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)
- [81. 搜索旋转排序数组2（有重复元素）](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/submissions/)

## Top K问题

思路：

- 排序：最直接的方法，时间O(NlogN)。在一定条件下（类似于“频次”的题目），可以使用“索引排序”来达到`O(N)`时间
- 堆：通常维护大小为K的堆来将时间复杂度降低到`O(NlogK)`。这里通过分析K的大小，做一些时空优化：
  - K比较小 => 维护大小为`K`的最差堆：每次遍历，新元素跟堆顶（最差）元素进行比较，挑选更好的；最终剩余的`K`个就是最好的。
  - K比较大 => 维护大小为`N-K`的最好堆：每次遍历，新元素跟堆顶（最好）元素进行比较，然后挑选更差的；最终剩余的`N-K`个就是最差的，用全集减去这些，就是`K`个最好的。

题目：

- [347. 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)
- [451. 根据字符出现频率排序](https://leetcode-cn.com/problems/sort-characters-by-frequency/)
- [692. 前K个高频单词，字典序升序输出](https://leetcode-cn.com/problems/top-k-frequent-words/)

## 第K个数字问题（狭义的Top K）

不明显、但比较高级的二分查找用法，掌握了会对二分查找有更深的认识。

1、题型特点：

第K个数字的问题，则是在Top K基础上加了些限制条件：

- 第K个：不要求前K个，只需要在某种规则（比如最小）下的第K个
- 数字：元素有二向性规则，一般是数字（比如大小）

2、思路：

沿用Top K的思路有时能解决问题，但在N比较大的时候，可能会导致TLE/MLE。这时候就要想：二分查找。举个常见例子：

> 找出第K小的数字

“第K小的元素”意味着“比该元素小的数字有K个”，所以，每次选出中间点M后，数一下列表中【小于等于M】的数量C，进行二路归并（注意不能是三路，即二分过程一定要收敛到一个点上）、并且始终遵循【左闭右开】原则：

```js
if (C < K) {
  L = M + 1 // 左闭。表示这里表示M不可能，反推条件不包括相等
} else {
  R = M // 右开。这里也可以反推条件是包括相等情况的
}
```

3、题目：

- [378. 有序矩阵中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/)
- [719. 找出第 k 小的距离对](https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/)

## 【滑动窗口】解决【子串问题】

技术点：

- 滑动窗口：遍历出子串，右指针探索、左指针优化，O(N)。
- HashMap：用以统计字符，因为支持O(1)的增删操作，与滑动窗口的遍历方式配合得很好。一般需要设置一个变量来代替HashMap的遍历，将该过程从O(N)优化到O(1)。

总体只需要O(N)时间。

题目：

- 76（标准题）
- 3、438、159
- 424、1004

## backtrack问题

backtrack专指“状态空间搜索”问题中的DFS解法。LeetCode上已经有人整理了[backtrack通用解法的思路以及使用场景](https://leetcode.com/problems/subsets/discuss/27281/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning))。

另外，它一般对应有“迭代（BFS）”解法，思路一般都类似，在此暂不讨论。

题目：

- [46. 全排列(无重复元素)](https://leetcode-cn.com/problems/permutations/)
- [47. 全排列(有重复元素)](https://leetcode-cn.com/problems/permutations-ii/)
- [31. 下一个排列(C++ API)](https://leetcode-cn.com/problems/next-permutation/)
- [556. 下一个更大元素(排列)](https://leetcode-cn.com/problems/next-greater-element-iii/)

- [78. 集合(无重复元素)的子集](https://leetcode-cn.com/problems/subsets/solution/hui-su-suan-fa-by-powcai-5/)
- [90. 序列(有重复元素)的子集](https://leetcode-cn.com/problems/subsets-ii/submissions/)

- [39. 组合总和(无限)](https://leetcode-cn.com/problems/combination-sum/)
- [40. 组合总和(有限)](https://leetcode-cn.com/problems/combination-sum-ii/)

## 背包问题（Knapsack）

- 01背包
- (类)完全背包
  - [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
  - [377. 组合总和4](https://leetcode-cn.com/problems/combination-sum-iv/)
  - 322
  - 518
- 多重背包

## 区间问题

思路：排序。

- [56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/submissions/)

## 分段问题

875 774 410

## 【单调栈】解决【Next Greater问题】

题目：

- [739. 每日温度](https://leetcode-cn.com/problems/daily-temperatures/submissions/)
- [1019. 链表中的 NextGreater](https://leetcode-cn.com/problems/next-greater-node-in-linked-list/comments/)
- [496. 数组中的 NextGreater](https://leetcode-cn.com/problems/next-greater-element-i/)
- [503. 循环数组中的 NextGreater](https://leetcode-cn.com/problems/next-greater-element-ii/)

## 悬而未决

- [118. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
  - 朴素解法虽然比较慢，但有扩展性(3段 => K段)
- [437: Path Sum III](https://leetcode.com/problems/path-sum-iii/discuss/91889/Simple-Java-DFS)该解法(很简洁但没看出原理)。
- [336：Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/discuss/79195/O(n-*-k2)-java-solution-with-Trie-structure)，Trie解法。
- [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/discuss/10127/An-iterative-method.)DP解法。
- [1008](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/discuss/252232/JavaC++Python-O(N))：存在O(HlogN)乃至O(N)解法？时间复杂度分析是否错了？

## 666的解法

- 55：贪心解法，将`bottom-up DP`优化成线性复杂度
