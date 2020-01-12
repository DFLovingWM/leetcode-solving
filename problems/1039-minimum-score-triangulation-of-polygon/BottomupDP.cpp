/**
 * Bottom-up
 * 时间：`O(N^3)`，8ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    int minScoreTriangulation(vector<int>& A) {
        const int n = A.size();
        // dp[i][j]表示`i`点到`j`点能组成的最小三角形之和
        vector<vector<int>> dp(n, vector<int>(n, INT_MAX));
        // 边界
        for (int i = 0; i + 1 < n; ++i) {
            dp[i][i + 1] = 0;
        }
        // 迭代
        for (int len = 3; len <= n; ++len) { // 长度：递增
            for (int i = 0; i + len - 1 < n; ++i) { // 左边界
                int j = i + len - 1;
                for (int k = i + 1; k < j; ++k) { // 中间点
                    int tmp = A[i] * A[j] * A[k] + dp[i][k] + dp[k][j];
                    dp[i][j] = min(dp[i][j], tmp);
                }
            }
        }
        // 目标
        return dp[0][n - 1];
    }
};