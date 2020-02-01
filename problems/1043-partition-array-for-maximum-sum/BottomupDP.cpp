/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2)`, 48ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSumAfterPartitioning(vector<int>& A, int K) {
        const int n = A.size();

        // 预处理出区间最大值
        vector<vector<int>> rangeMax(n, vector<int>(n, INT_MIN));
        for (int i = 0; i < n; ++i) {
            rangeMax[i][i] = A[i];
            for (int j = i + 1; j < n; ++j) {
                rangeMax[i][j] = max(rangeMax[i][j - 1], A[j]);
            }
        }

        // dp[i]表示前i个元素能达到的最大和
        vector<int> dp(n + 1, 0);
        for (int i = 1; i <= n; ++i) { // 当前结尾
            for (int j = max(i - K, 0); j < i; ++j) { // 上一个结尾
                dp[i] = max(dp[i], dp[j] + rangeMax[j][i - 1] * (i - j));
            }
        }

        return dp[n];
    }
};