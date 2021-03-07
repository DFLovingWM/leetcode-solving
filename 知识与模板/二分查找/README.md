# 二分查找

## 基础

本博客探讨数组的二分查找。

二分查找是一种比线性遍历要快很多的搜索方案，其特点有：

- 在“存储-搜索”（set-get）场景中，只关注搜索，所以数组二分查找跟二叉查找树（BST）不同，前者无法在log时间内维护数组，后者可以。
- 有序数组是前提
- 时间复杂度为O(logN)
- 能应付的场景：
  - 精确查找
  - 非精确查找（查找上界、下界）
  - 存在重复元素



## 重新认识

对于二分查找最精确的认知是：

> 输入一个目标元素x，查找的是x应该插入的空隙所在的下标。

另外，查找的过程，本质上是输入的初始区间不断减半直到不能再减的过程。

这里的重点是，查找的是“空隙”的下标，而非已有元素的下标。我们可以举个例子来理解。

假设一个数组，存在重复元素：

```js
[1, 3, 5, 5, 5, 8]
```

如果是对已有元素建立下标，就是这种视角：

```
value：1 3 5 5 5 8
index：0 1 2 3 4 5
```

初始区间为`[0, 5]`。

不妨换个角度：对元素之间的空隙建立下标，这个下标表示“往该位置插入元素之后，元素的下标”，可以类比`splice`的第一个参数。这样看起来就是：

```
value:    1   3   5   5   5   8
index:  0   1   2   3   4   5   6
```

初始区间是`[0, 6)`，在迭代的过程中，始终保持“左闭右开”的原则。

相比起前者，这种思路万无一失。原因？



## 实现

可以参考Python的`bisect_left`的实现。关注点：

1. “左闭右开”（核心）
1. 防止下标溢出
1. 2条分支（不是3条）：因为是寻找上下界，所以即使相等也要继续找到端点

```js
/**
 * 二分查找：寻找下界
 * @param {T[]} arr 有序数组
 * @param {number} left 起点（包含，闭）
 * @param {number} right 终点（不包含，开）
 * @param {T} target 目标元素
 * @param {number} 目标元素(下界)的位置
 */
function bisectLeft (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2) // 这种写法可防止下标溢出
    if (target <= arr[middle]) {
      right = middle // 开
    } else {
      left = middle + 1 // 闭
    }
  }
  return left
}
```

然后`bisect_right`跟它的区别很细微，注意看分支语句的判断处：

```js
function bisectRight (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target < arr[middle]) { // 区别在这里
      right = middle
    } else {
      left = middle + 1
    }
  }
  return left
}
```

递归方式的实现，在这里不详述了。

## 参考

[二分查找有几种写法？它们的区别是什么？](https://www.zhihu.com/question/36132386/answer/530313852?utm_source=wechat_session&utm_medium=social&utm_oi=607648976770699264)
