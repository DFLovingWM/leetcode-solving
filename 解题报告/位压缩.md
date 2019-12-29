# 位压缩

## 含义

位压缩是指用一个整数的二进制形式来表示一个复杂的对象。常见用途：

- 在回溯题目中，枚举策略/组合
  - 作用：化递归为循环，突破栈限制
  - 场景：0/1背包问题中，当`N`不是太大的时候，可以把`2^N`种策略全部枚举出来、进行解析
- 在动态规划题目中，代替集合（`Set`）表示状态
  - 作用
    - 状态化：可缓存的状态只能由基本类型构成，当集合可以化为整数后，可以将回溯问题转化为DP问题，更可以用Bottom-up来做
    - 省时：某些操作可以通过`O(1)`时间的位操作得到，无需线性遍历整个集合
    - 省内存
    - 回溯时不用手动恢复该对象
  - 场景
    - 小范围字符的存在与否：比如只有小写字母，可用26个位可以表示每个小写字母是否存在
    - 小范围字符的数量但只关注奇偶性，相当于0/1个

## 常见位操作

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

## 题目

- 周赛160第3题：枚举策略
- 周赛162第4题：枚举策略
- [1239. 串联字符串的最大长度](https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)，位压缩的2个用处可以同时发挥
- [1255. 得分最高的单词集合](https://leetcode-cn.com/problems/maximum-score-words-formed-by-letters/)，只能枚举、不能表示状态
- [318. 最大单词长度乘积](https://leetcode-cn.com/problems/maximum-product-of-word-lengths/)，代替集合
- [1177. 构建回文串检测](https://leetcode-cn.com/problems/can-make-palindrome-from-substring/)，代替集合，因为是奇偶性，比较隐晦
- [1178. 猜字谜](https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/)，代替集合且有更快的操作（秀）
