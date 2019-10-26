# 225. 用队列实现栈

## 题意

用队列（操作包括：push、popFront、top、empty）实现栈：

- push
- pop
- top
- empty

## 思路

push和pop中，总有一个操作需要O(N)时间。所以思路有许多种：

- pop需要O(N)，两个队列
  - pop：每次pop都需要将队列A中的所有元素移动到队列B中，最后一个元素就是需要删除的元素。
  - top：可以用一个变量来记录最新的top，就不必花O(N)时间移动。

另外还有：

- push需要O(N)，两个队列
- push需要O(N)，一个队列

## 参考

- [LeetCode官方题解](https://leetcode-cn.com/problems/implement-stack-using-queues/solution/yong-dui-lie-shi-xian-zhan-by-leetcode/)
