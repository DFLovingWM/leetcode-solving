# 累积数组

## 概念

Accumulative array，表示可累积的数组。举个例子：

给定一个数组。如果要求数组中的最大值，那么我们只需要线性遍历数组、并维护一个变量`max`：

```js
function getMax (arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; ++i) {
    max = Math.max(max, arr[i]);
  }
  return max;
}
```

在`i`前进的过程中，`max`需要跟每一个元素`arr[i]`比较并更新。实际上在与`arr[i]`比较之前，它表示当前区间`arr[0] ~ arr[i - 1]`中的最大值。那么我们把问题再改一改：

给定一个数组，求数组中每个元素左边的最大值。那么做法实际上是一样的，只是返回值由变量变为数组：

```js
function getMaxArr (arr) {
  let leftMax = [];
  leftMax[0] = -Infinity; // 左边不存在元素，所以最大值用`-Infinity`表示
  for (let i = 1; i < arr.length; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i - 1]);
  }
  return leftMax;
}
```

于是这里的`leftMax`就是所谓的Accumulative array，姑且成为累积数组。

累积数组有什么用呢？它求的对象往往是最大/最小值（因为可递推），一般作为预处理手段（减少重复工作），来降低算法的时间复杂度。

## 题目

实现：

- [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)
- [716. 最大栈](https://leetcode-cn.com/problems/max-stack/)

应用：

- [42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)
- [265. 粉刷房子 II](https://leetcode-cn.com/problems/paint-house-ii/)
- [1289. 下降路径最小和 II](https://leetcode-cn.com/problems/minimum-falling-path-sum-ii/)
- [1031. 两个非重叠子数组的最大和](https://leetcode-cn.com/problems/maximum-sum-of-two-non-overlapping-subarrays/)
