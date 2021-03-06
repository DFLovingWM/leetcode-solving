# 1124. 表现良好的最长时间段

## 思路

将大于8的看作1、小于8的看作-1，则问题转化为：求和大于0的子数组的最大长度。

首先，涉及到子数组的和，所以可以预处理出前缀和数组`prefix`。接下来的思路有：

- 朴素算法
  - 算法：对于`prefix[R]`，找到最小的`L`使得`prefix[R] - prefix[L] > 0`。
  - 时间：`O(N^2)`。考虑到`N <= 10000`，很容易TLE，应该有`O(NlogN)`甚至`O(N)`的更优解法。
- 哈希表
  - 算法：由于`arr`都是`+1/-1`，所以`prefix`元素之间相差为1、即“连续”，可以看成是山坡。我们需要用哈希表`minIndex`来记录每一个数组出现的最小下标（即首次出现的下标），如果`prefix[R] > 0`，则与首元素连起来构成最大长度，为`R + 1`；如果`prefix[R] <= 0`，则与`prefix[R] - 1`的最小下标即`minIndex.get(prefix[R] - 1)`连起来就能构成最大长度。
  - 时间：`O(N)`。
- 单调(递减)栈
  - 算法：我们的目标是找到一对下标`(L, R)`（其中`L < R`）使得`prefix[R] - prefix[L] > 0`并且`R - L`最大。
    - 第一步，筛选`L`：如果有`l1 < l2`，并且`prefix[l1] < prefix[l2]`，那么`l2`绝对不可能是目标，因为`l1`比`l2`下标更小、值也更小，所以这里需要一个单调递减的栈，来保存所有可能的`L`。
    - 第二步，筛选`R`：如果有`r1 < r2`，并且`prefix[r1] < prefix[r2]`，那么同理`r2`要优于`r1`，这告诉我们：可以从大到小（逆序）遍历`R`，并与栈顶的`L`作比较。如果`prefix[R] - prefix[L] > 0`则更新答案，同时将`L`出栈（`R`递减，需要匹配更小的`L`，所以将该`L`抛弃）。
  - 时间：`O(N)`。
