# Trie树

## 概览

Trie树，又叫“字典树”“前缀树”，是一个用共同前缀的方式存储一组字符串的树。跟“前缀”有关的字符串问题都应该想到Trie。使用场景：

- 单词统计
- 前缀统计

更多使用场景可以参考[Trie树实现：官方题解](https://leetcode-cn.com/problems/implement-trie-prefix-tree/solution/shi-xian-trie-qian-zhui-shu-by-leetcode/)。

## 编码

1、树的抽象构成：

- 结点：存储前缀信息，比如该前缀“是否是个单词”。其中，根结点表示空串，所以一开始没有任何单词时就存在。
- 边：不同的边表示不同的字符。一个前缀就是路径上的字符累加。

2、具体编码时，树结点`TrieNode`结构：

```js
function TrieNode () {
  this.exist = false // 表示到该字符为止是否是个单词（是否存在该单词）
  this.nexts = Array.from({ length: 26 }, () => null) // 26个字母
}
```

有时候，单词可以重复，需要计算单词数量时：

```js
function TrieNode () {
  this.count = 0 // 记录该单词数量
  this.nexts = new Map() // Map比数组更好，因为长度不定（不一定是26个字母），而且一开始占的空间更小
}
```

3、实现方法：Trie树的基本方法有：

- `insert(word)`：插入一个单词
- `search(word)`：搜索是否存在某个单词
- `startWith(prefix)`：搜索是否存在以某个前缀开始的单词

实现的方法不外乎：

- 循环
- 递归：在需要“穷举“的题目中有用
