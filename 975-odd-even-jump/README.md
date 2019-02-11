## 题意

给定一个Number数组，现从某个点出发，可以按照题目规定的 odd jump 和 even jump 来前进，问如果想要到达终点，总共可以在多少个起点处出发？



## 解决方案

参考：[lee215: DP idea, Using TreeMap or Stack](https://leetcode.com/problems/odd-even-jump/discuss/217981/JavaC%2B%2BPython-DP-idea-Using-TreeMap-or-Stack)。

### 1. 基本思路

从题意可以看出，在某一点处，人物可以进行的动作有两种可能：

- 进行odd jump，前进到一个刚好比它大或相等的最近(下标更小)的点(记为nextLarger)
- 进行even jump，前进到一个刚好比它小或相等的最近(下标更小)的点(记为nextSmaller)

但是，在某个确定的路线上，到达该点的时候，实际上有且只有一种走法。举个具体例子：

> [ 7, 9, 3, 2, 4 ]

如果从7出发，第1跳一定是odd jump，需要找nextLarger，发现是……9，则跳到9。对于9这个点而言，这时候就轮到even jump了，所以它只能跳到……4。但如果一开始是从9出发的话，则因为首先是odd jump所以只能跳到……发现跳不了了。所以说，只要确定了起点，路径就是确定(唯一)的，或者说对于该路径上的每一个点，已经确定是odd还是even jump了。

接下来就正式说DP了。

Intuition：对于某一点 Ai 来说，其实不必看它能否跳到终点，而是看它能否跳到一个“可以跳到终点的点”。比如已经确定 Aj 可以到达终点，而 Ai 可以跳到 Aj ，则 Ai 也能够到达终点。而关于初始状态，可以认为终点是能到达终点的(废话)，所以终点就是初始状态。但因为有两种跳法，所以是两个dp数组：odd、even：

> odd(i)：表示在位置(i)进行odd jump是否能到达终点
>
> even(i)：表示在位置(i)进行even jump是否能到达终点

因为终点是可达的，作为初始状态，所以迭代过程是逆序的，并且：对于某个点 Ai 来说，DP之前需要找到下一点 Aj。对于odd jump来说，Aj 就是 nextLarger；对于even jump来说 Aj 是 nextSmaller。这是一个search的过程，一般情况下需要O(N)时间复杂度，不过可以进行一些优化。

### 2. 优化点

目前来说，DP+线性搜索，总的时间复杂度是O(N*N)。因为N是上万的，所以复杂度有点高，可以考虑将search优化为O(logN)。因为需求是“找到一个比输入的key1更大一点/更小一点的key2”，可以从“有序”的数据结构中考虑，于是可考虑的有：

- BST（乃至AVL、红黑树）
- 堆



