/**
 * Bottom-up DP + 优化
 * 
 * 时间：`O(NK)`, 20ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSumAfterPartitioning(vector<int>& A, int K) {
        const int n = A.size();

        // dp[i]表示前i个元素能达到的最大和
        vector<int> dp(n + 1, 0);
        for (int i = 1; i <= n; ++i) { // 当前结尾
            int maxN = -1;
            for (int j = i - 1; j >= max(i - K, 0); --j) { // 上一个结尾（同时逆序找最大值）
                maxN = max(maxN, A[j]);
                dp[i] = max(dp[i], dp[j] + maxN * (i - j));
            }
        }

        return dp[n];
    }
};