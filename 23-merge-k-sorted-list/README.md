# 23. 合并K个有序链表

总结：

- K个链表直接串联：O(KN)时间，O(1)空间
- 重新排序：O(NlogN)时间，O(N)空间
- 优先队列：O(NlogK)时间，O(K)空间
- (K - 1)次双链表串联：O(KL)时间，O(1)空间
- 分治(K个链表，每两个进行合并，一直迭代至只剩一个链表)：和4不一样？？

参考：[23. Solution](https://leetcode.com/problems/merge-k-sorted-lists/solution/)