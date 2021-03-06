# 170. 两数之和 III - 数据结构设计

## 题意

设计一个数据结构`TwoSum`，需要提供两种操作：

- `add(n)`：增加元素n
- `find(sum)`：求是否存在和为sum的一对元素

## 思路

- 数组存储 + Hash等值搜索：跟基本的TwoSum题一个思路，Hash等值使用O(N)时间寻找。
  - 时间：O(N)，N为元素数量
  - 空间：O(N)
- HashMap存频次 + Hash等值搜索：考虑到数字可以重复，于是将重复的数字存到一个桶里面，即用HashMap作为counter记录频次。需要注意一种情况：当x、y相等时，x的频次在2以上才算存在。
  - 时间：O(M)，M为不同元素的数量
  - 空间：O(M)

以上方案的共同特点是：将耗时操作放在`find`中，而`add`都是O(1)，即查询都是"lazy"的。但如果需求是查询更多的话，就不能是"lazy"了，于是还有一种方案（参考[labuladong：Two Sum 问题的核心思想](https://mp.weixin.qq.com/s/EwsHMcSeGPMtNbVZBBm8GQ)，另外推荐大家关注这位博主，我很喜欢看他的文章）：

- HashSet存所有和：每增加一个新数字，都遍历已有数字列表，把新的可达的和加入结果集中。查询的时候就是O(1)。
  - 时间：add操作，O(N)，N逐渐增大
  - 空间：O(N ^ 2)，因为每新增一个数字，最多增加N个新的和
