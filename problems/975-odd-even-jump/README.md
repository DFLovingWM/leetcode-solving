# Odd Even Jump

## 思路

对于位置`i`来说，它的奇数下一跳是`greater(i)`，偶数下一跳是`smaller(i)`，即都是确定的。所以思路为：

- 借助有序表（比如Java的`TreeMap`）找出每个数字对应的`greater`和`smaller`。因为跳总是向右的，所以需要从右到左遍历。
- 动态规划：`odd[i]`表示奇数跳到位置`i`是否成功，`even[i]`表示偶数跳到位置`i`是否成功。因为奇数、偶数跳是轮流的，所以有状态转移：

```js
odd[i] = even[smaller[i]]
even[i] = odd[greater[i]]
```

由于初始状态是“终点即成功”，即`odd[n-1] = even[n-1] = true`，所以迭代过程需要从终点开始逆序。

时间复杂度：O(NlogN + N) = O(NlogN)

## 参考

[lee215: DP idea, Using TreeMap or Stack](https://leetcode.com/problems/odd-even-jump/discuss/217981/JavaC%2B%2BPython-DP-idea-Using-TreeMap-or-Stack)。

## 反思总结

从左往右跳，题干类似[55. 跳跃游戏](https://leetcode-cn.com/problems/jump-game)。思路也类似，使用DP。
