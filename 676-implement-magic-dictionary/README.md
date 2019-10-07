# 676. 实现一个魔法字典

## 题意

实现一个单词系统的增加与查询操作：

- `buildDict(words)`：给定若干单词
- `search(word)`：查询系统中是否存在与word的汉明距离相差1的单词

## 思路

关键在于怎么处理`search`操作。

> 1、根据长度哈希

无论相差的那1个字符是什么，单词长度总是不变的，所以可以根据单词长度来哈希，即长度相等的单词会被分配到同一个桶（bucket）中。然后对于一个查询单词，在对应的桶中进行线性查找。因为分好了桶，所以查找的范围缩小了，实际中能剩下很多时间。

- 时间
  - `buildDict(words)`：O(N)，N为系统单词数量
  - `search(word)`：O(M)，其中M为桶中平均单词数，并且有M < N。最坏情况M = N
- 空间：O(N)

> 2、生成所有邻居单词

“邻居单词”指汉明距离为1的单词。该方法在每次新增时，将word的所有邻居都加入集合中，比如单词`word`就有4个邻居：

- `*ord`（并且*不能为w）
- `w*rd`（并且*不能为o）
- `wo*d`（并且*不能为r）
- `wor*`（并且*不能为d）

当查询单词为`work`，遍历其邻居：

- `*ork`
- `w*rk`
- `wo*k`
- `wor*`

发现公共邻居为`wor*`，由于*不能为`d`，即`k`是可以的，所以`work`就返回true了。

该方法的复杂度：

- 时间
  - `buildDict(words)`：O(NL)，N为系统单词数量，L为单词平均长度
  - `search(word)`：O(L)
- 空间：O(NL)

参考自：[Python, without *26 factor in complexity](https://leetcode.com/problems/implement-magic-dictionary/discuss/107454/Python-without-*26-factor-in-complexity)

> 3. Trie树 + 回溯

建立Trie树存储所有单词，查找的时候遵：<u>如果当前不同字符的个数小于1，就可以穷举</u>。

- 时间
  - `buildDict(words)`：O(NL)，N为系统单词数量，L为单词平均长度
  - `search(word)`：最坏情况为O(26^L)
- 空间：最坏情况为O(NL)

## 反思总结

该题跟[211. 添加与搜索单词 - 数据结构设计](https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/)十分类似。
