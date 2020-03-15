# 设计一个支持增量操作的栈

## 题意

实现一个栈，还要支持左区间加法。

## 思路

关键是实现加法。最简单的思路就是`O(K)`时间复杂度，虽然能过但并不高效。

高效解法可以参考：[增量操作时只需要把增量存在 k 处那一个元素上](https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/solution/zeng-liang-cao-zuo-shi-zhi-xu-yao-ba-zeng-liang-cu/)，即每次需要对一段以栈底为左边界的区间进行加法时，只需要叠加右边界的增量值即可。也就是说，我们需要一个额外的数组`acc`，其中`acc[i]`表示i位置上的总增量：

- `increment(k, val)`：只需要更新右边界，即`acc[k-1] += val`，`O(1)`时间。
- `pop()`：旧栈顶需要将它的增量【交接】给新的栈顶，即`acc[n-2] += acc[n-1]`。然后返回值等于原始值加上增量，即`arr[n-1] + acc[n-1]`。
