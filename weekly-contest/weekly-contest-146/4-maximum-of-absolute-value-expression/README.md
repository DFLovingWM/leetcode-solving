# 1131. 绝对值表达式的最大值

## 思路

枚举绝对值：

```
target
  = |A[i] - A[j]| + |B[i] - B[j]| + |i - j|
  = a * A[i] - a * A[j] + b * B[i] - b * B[j] + c * i - c * j
  = (a * A[i] + b * B[i] + c * i) + (- a * A[j] - b * B[j] - c * j)
  = Fi + Gj
```
