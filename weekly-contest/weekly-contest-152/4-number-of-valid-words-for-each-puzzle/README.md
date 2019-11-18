# 猜字谜

## 题意

给定M个谜底，并给出N个谜语，问每个谜语的谜底数有多少。

## 思路

朴素算法：使用`HashSet`记录字母种类，然后一个个进行比较，时间为`O(26NM)`、大概到达`10^9`，即使能AC、也是处于TLE的边缘。

优化：因为只有26个字母，所以考虑用整数(位压缩)代替集合，这样在时间上也能赢回一点。

算法优化：上面的算法用语言描述就是：对于每一个puzzle，遍历所有的word，累计满足的数量，该算法慢是因为`O(NM)`太大。题目有个限制：puzzle的字母数只有7个，这给了我们一个新方向，即对于每一个puzzle，我们不再遍历所有给定的word，而是从puzzle的“子集”中找就行了（这里“子集”指的是字母种类数小于等于puzzle的任意单词，而根据谜底的定义，它一定是puzzle的子集）。因为字母数只有7个，所以子集个数只有`2^7=128`个，比`M`小很多。基于位压缩的子集的遍历，也需要一定技巧。

## 反思总结

关键的位操作/运算：

- 判断b是否是A的子集

```js
var isSubsetOf = (b, A) => (b & A) === b
// 或
var isSubsetOf = (b, A) => (b | A) === A
```

- 获取A的所有子集

```js
function getSubsets (A) {
  const res = []
  for (let i = A; i > 0; i = (i - 1) & A) { // 注意这里&A
    res.push(i)
  }
  return res
}
```

## 参考

- [位运算 + map 映射](https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/solution/wei-yun-suan-mapying-she-by-jameywoo/)
