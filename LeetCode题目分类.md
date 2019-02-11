- permutations: 46, 47，31
- Lowest Common Ancestor: 235, 236
- N Sum问题：1、15、18

# 前缀和的应用

- 560：典型，子数组的和
- 974：稍微变形，和变为整除
- 437：二叉树中，子路径的和

# 主题

- K sum问题：递归 + two pointers
- sum问题：bitset/母函数/背包
- Sub-array sum/product问题：
  - 等于K：即相等搜索。[560](https://leetcode.com/problems/subarray-sum-equals-k/)
    - prefix sum + O(1)查找
  - 小于或大于K：即范围搜索。[713](https://leetcode.com/problems/subarray-product-less-than-k/solution/)
    - binary search，O(logN)
    - sliding window
  - 等于K的倍数。[523](https://leetcode.com/problems/continuous-subarray-sum/)
    - prefixs sum。正常遍历需要O(M)或O(N)，不过可以使用mod优化为O(1)

# 悬而未决

- 713：binary search解法，参考Solution。
