# 437. 路径总和 III

## 思路

### "Naive"解法

所有结点都可能是路径的起点。如果将`pathSum(node, sum)`函数看作是求从`node`出发、和为`sum`的路径数量，那么为了让所有结点都参与，于是需要递归调用：

```js
function pathSum (node, sum) { // 从结点node出发
  if (!node) return 0

  return f(node, sum) +
    pathSum(node.left, sum) + // 从node的左结点出发（路径与node无关）
    pathSum(node.right, sum) // 从node的右结点出发（路径也与node无关）
}
```

而其中`f(node, needSum)`表示遍历到一条连续路径上的某个结点`node`，此时的目标和为`needSum`，它也是递归：

```js
function f (node, restSum) {
  if (!node) return 0

  let res = 0
  if (node.val === restSum) ++res // 从开头到该结点，这一段子链表的和满足条件，所以数量加1
  res += f(node.left, restSum - node.val)
  res += f(node.right, restSum - node.val)
  return res
}
```

综上：

- 递归`pathSum(node, sum)`：每个结点`node`都要作为一条路径的首结点（出发结点）
- 递归`f(node, sum)`：遍历从某个祖先结点开始到当前结点`node`的这段子链表，看有多少个满足条件的

时间复杂度分析：

- 最坏情况：树扁平成链表/数组，相当于二重循环：从每个结点出发(N)，遍历到末尾(N)，所以是O(N^2)
- 最好情况：树平衡，高度H=O(logN)。从每个结点出发(N)、遍历到最底层(H)，所以是O(NlogN)

PS.其实该解法属于DP（有重复的子问题），可以用Map来缓存结果，理论上会更快一些，但是该题的测试用例表示行不通。

### 子数组问题

路径是单向的（非"V"字型），并且是任意一段线段，所以问题转化为“求和为targetSum的子链表”。这是个【子数组】问题，解决方案一般有：

- 前缀和（转化为二值问题） + 哈希
- 滑动窗口：这里不适用，因为二叉树不是连续结构。而且数组元素没有规律，不具有二向性

故可用“前缀和 + 哈希”。

时间复杂度：最优O(logN)，最差O(N)

## 反思总结

与[560. 和为K的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/)中的2种解法的本质思路完全一致。

只是这里是树/链表版本，下标遍历变成了递归，所以理解起来可能有一定难度。重要题目。
