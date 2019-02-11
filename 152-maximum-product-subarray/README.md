## 思路

典型的动态规划。

类比题目：[53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)。

但product与sum有一个不同的地方，从而决定了DP解法上的细微区别。假设这里都是求最大值：

- sum：每一个数字都记录max，就能保证能获取最大值。即有：

```js
dp[i] = Math.max(
  dp[i - 1] + nums[i],
  nums[i]
)
```

- product：像sum的求解那样每次取两者中的较大值，在这里是欠妥的，因为需要考虑“负负得正”的情况，比如：[-2, 3, -4]，按照sum的简单思路最终得出的结果为3，而不是期望的24。于是，对于每一个数字来说，需要同时记录最大、最小值，即状态转移方程为：

```js
const candidates = [
  max[i - 1] * nums[i],
  min[i - 1] * nums[i],
  nums[i]
]

max[i] = Math.max(...candidates)
min[i] = Math.min(...candidates)
```

同时在DP遍历的过程中使用变量记录 max[i] 就能保证获取到最大值。

PS.其实空间复杂度也可以变为O(1)，而不需要O(N)。