# 10. 正则表达式匹配

## 思路

字符串匹配的题目，我们需要站在pattern的角度，去匹配/抵消text的字符。

pattern的字符包括：

- 小写字母
- `.`：匹配任意字符
- `*`：匹配任意多个前面的字符

### Top-down DP

递归函数`f(i, j)`的返回值表示`text[i:]`与`pattern[j:]`是否能匹配。递归单元做的事情是比较头部字符：

- 如果头部是`x*`，分类讨论：
  - 匹配0个x，则看`f(i, j + 2)`
  - 匹配1个x，则看`f(i + 1, j)`
  - 匹配1个以上的x，这种情况与“匹配1个x”一致，交给递归处理了
- 如果头部不是`x*`，则是简单情况，看首字符能否匹配、然后看`f(i+1, j+1)`

因为子问题有重叠的，所以可以使用备忘录/记忆化，以提高速度。

### Bottom-up DP

按照Top-down的思路，可以设`dp[i][j]`为`pattern[j:]`能否匹配`text[i:]`。

然而，也可以设`dp[i][j]`为`pattern[:j]`能否匹配`text[:i]`。

思路一致。具体编码时，注意下标细节即可。

## 参考

- [labuladong: 详细讲解，由浅入深](https://leetcode-cn.com/problems/regular-expression-matching/solution/ji-yu-guan-fang-ti-jie-gen-xiang-xi-de-jiang-jie-b/)
