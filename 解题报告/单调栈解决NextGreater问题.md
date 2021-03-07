# 单调栈解决RightGreater问题

## 引入

RightGreater问题是指在数字数组中，找出每一个数字右边第一个(最近的)比它大的数字。

Naive解法很简单，就是一个二重循环，时间为`O(N^2)`。然而这种问题最高效的方法是用栈，而且是单调栈，能使时间达到`O(N)`。

其实不单是RightGreater，就算是RightSmaller/LeftGreater/LeftSmaller问题，只要满足“下一个更大/小”就行。

生活中的例子：排队，每个人向右看齐，首先看到的第一个人。

## 思路

单调栈，有2种写法：

- 逆序遍历，当前元素搜索RightGreater
- 顺序遍历，当前元素作为RightGreater被搜索

这里着重说逆序遍历的方式，顺序遍历同理。

### 逆序遍历

因为RightGreater找的是右边的元素，所以可以选择从右边开始（逆序）遍历，以保存重复、有用的数据。为什么要用栈来保存已遍历的元素呢？（设遍历到的当前元素为`Ai`，）因为我们想要检测离`Ai`最近的元素是不是比它小，而这个最近元素，就是栈顶元素，它优先于栈内（更右边的）元素被访问。

所以算法思路为：当逆序遍历到`Ai`时，与当前栈顶`Aj`比较：

- 如果`Ai < Aj`，说明`Aj`就是`Ai`的RightGreater，然后将`Ai`压栈。
- 如果`Ai >= Aj`，说明`Aj`不是目标，此时我们将`Aj`出栈，让`Ai`继续与新的栈顶比较、直到找到目标或者栈空。

其中，为什么将比`Ai`小的栈顶元素出栈呢，它不能参与后面的过程了吗？

**因为当`Ai >= Aj`时，之后的元素即`Ai`左边的元素，找RightGreater时已经不可能再找到`Aj`了，因为`Ai`比它大，所以最远只能找到`Ai`。**

所以，只有比`Ai`更大的元素才能作为「栈顶的后备元素」存在于栈内，比`Ai`更小的没用了、就抛弃，于是从栈顶到栈底形成「单调递增的栈」。

时间复杂度分析：看起来像二重循环，然而对于每个元素来说，压栈1次、出栈最多1次，所以时间为`O(2N) = O(N)`。这也是对暴力搜索的一种优化：因为在暴力搜索中，每次要从`Ai`开始搜索到结尾，其实完全没有必要。

### 顺序遍历

核心思想已经在上面说完了。顺序遍历只是另一种殊途同归的写法。算法思路：顺序遍历到`Aj`（注意这里我用`Aj`而不是`Ai`表示，说明当前元素是作为潜在目标被搜索的）时，与栈顶`Ai`比较：

- 如果`Ai < Aj`，说明`Aj`就是`Ai`的RightGreater，将`Ai`出栈后，重复该过程、直到`Aj`不再满足或者栈空。
- 如果`Ai >= Aj`，说明`Aj`并不是目标，则直接将`Aj`入栈。可见这里也形成了一个单调递减的栈。

## 题目

- [496. 下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)
- [503. 下一个更大元素 II](https://leetcode-cn.com/problems/next-greater-element-ii/)
- [739. 每日温度](https://leetcode-cn.com/problems/daily-temperatures/)
- [901. 股票价格跨度](https://leetcode-cn.com/problems/online-stock-span/)
- [1019. 链表中的下一个更大节点](https://leetcode-cn.com/problems/next-greater-node-in-linked-list/)
- [907. 子数组的最小值之和](https://leetcode-cn.com/problems/sum-of-subarray-minimums/)

## 参考

- [labuladong：单调栈 Monotonic Stack 的使用](https://mp.weixin.qq.com/s?__biz=MzU0MDg5OTYyOQ==&mid=2247483803&idx=1&sn=d8c5fac3a15dcac0833445cb934e1a46&chksm=fb3361d9cc44e8cff919df33cf9f1517ce9ad746452f86dd93f282f4964e93ac1eb3abb10cde&scene=21#wechat_redirect)
