# 1320. 二指输入的的最小距离

## 思路

首先要考虑如何表示一个状态。下列因素是变动的：

- 需要走的下一个字符
- 当前左手指所在位置
- 当前右手指所在位置

所以一个状态是三维的：`(i, left, right)`。

本质上是一个最短路问题，其中起点为`(0, l, r)`，终点为`(N, l, r)`。

### Top-down DP

递归函数`helper(i, left, right)`返回最终能达到的最小代价。

对于每个状态来说，有两种策略到达下一个状态：要么用左手指去走`word[i]`、要么用右手指去走`word[i]`，取总代价更小值即可。

### Bottom-up DP

递推数组`dp[i][left][right]`表示到达第`i`步、左手指在`left`、右手指在`right`的最小步数。

对于当前状态来说，是由上一个状态通过左指移动而来、或者是通过右指移动而来，即有：

```c++
dp[i][ch][right] = min(dp[i][ch][right], dp[i][left][right] + dist(left, ch)); // 左指移动
dp[i][left][ch] = min(dp[i][left][ch], dp[i][left][right] + dist(right, ch)); // 右指移动
```

### BFS

状态定义为类：

```c++
// 本来还有个i，但是因为代码中有个循环可以读取i，所以这里可以省掉
struct State {
    int left;
    int right;
};
```

为了去重/剪枝，需要设置一个三维数组`dist[i][left][right]`，表示第`i`步后左手指到达`left`、右手指到达`right`的最小步数。只有在新距离比已有`dist`更小的情况下，才能扩展该新结点。

因为`dist`数组是不断收敛的，本质上对应于DP中的`dp`数组，所以在代码上与Bottom-up DP非常像。
