/**
 * BottomUp DP
 * 
 * 时间：`O(N^2)`, 4ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int integerBreak(int N) {
        vector<int> dp(N + 1, 0);
        dp[1] = dp[2] = 1;
        for (int n = 3; n <= N; ++n) {
            for (int i = 1; i <= n / 2; ++i) {
                // 关键：取`i`与`dp[i]`中的更大值来做乘法：
                // (1)取`i`表示不继续对`i`进行拆分
                // (2)反之，取`dp[i]`表示对`i`继续拆分
                int curr = max(i, dp[i]) * max(n - i, dp[n - i]);

                // 记录最大值
                dp[n] = max(dp[n], curr);
            }
        }
        return dp[N];
    }
};