# 二分查找模拟Trie树

## 引入

解决单词前缀问题时，如果在contest、面试这种时间紧迫的情形下编码，那么Trie树并不是一个非常好的选择。为了偷懒，也为了多一种思路来解决问题，我们可以用有序数组加二分查找，来模拟Trie树。

## 思路

首先要将给定的前缀数组`prefixes`按照字典序排序。

细分又有2种思路来模拟。给定一个单词`word`：

1（更简单）、如果只需要求最小前缀，那么可以使用1次二分查找。步骤为：

- 筛选出最小前缀：排序后，最小前缀肯定在连续线段的开头，把它们挑选出来。
- 搜索：`i = bisectRight(prefixes, word, 0, prefixes.length)`，即在`prefixes`中搜索`word`的右边界，然后判断`prefixes[i - 1]`是否是`word`的前缀即可。注意，这里统一了两种情况：（1）单词等于前缀；（2）单词包括前缀。并且筛选出最小前缀的意义还有一个，就是如果`prefixes`中存在`word`的前缀，那么肯定是唯一的（所以好好思考下为什么使用`bisectRight`，找的是右边界）。

2（更通用）、如果需要求出所有前缀，那么就使用K次二分查找。核心思想：每次对字符`word[i]`进行2次二分查找，获得一个范围，然后迭代每个字符，该范围逐渐缩小，最终就是要求的前缀范围。该方法与Trie树在行为上高度统一：Trie通过`key`在`O(1)`时间访问下一个字符所在结点，有序数组通过1次二分查找在`O(logN)`时间访问下一个字符所在的范围。

## 题目

可以找一些Trie树的模板题，然后用二分查找来试试。这里列举一下我认为不错的题目：

- [648. 单词替换](https://leetcode-cn.com/problems/replace-words/)
- [1032. 字符流](https://leetcode-cn.com/problems/stream-of-characters/)，两种方法都能用

## 参考

- [天空的代码世界：Leetcode 第133场比赛回顾](https://mp.weixin.qq.com/s?__biz=MzI2NDA0NDM1MA==&mid=2650106733&idx=1&sn=149c08a35fed7cbb2d72cb442ac187d1&scene=21#wechat_redirect)中关于二分查找模拟Trie树部分的阐述。
