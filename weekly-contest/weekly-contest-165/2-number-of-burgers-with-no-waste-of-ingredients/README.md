# 5276. 不浪费原料的汉堡制作方案

## 思路

解一元二次方程：

```text
4x + y = tomatoSlices
2x + y = cheeseSlices
```

则有：

```text
x = (tomatoSlices - cheeseSlices * 2) / 2
y = cheeseSlices - 2x
```

求出`x`、`y`后，需要验证一下两者都为正整数。
