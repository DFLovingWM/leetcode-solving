/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2 * d)`, 36ms
 */

class Solution {
public:
    int minDifficulty(vector<int>& jobDiffs, int day) {
        const int n = jobDiffs.size();
        if (n < day) return -1;

        // dp[d][i]表示前d天完成前i个工作的最小难度和
        vector<vector<int>> dp(day + 1, vector<int>(n + 1, INT_MAX));
        dp[0][0] = 0;

        for (int d = 1; d <= day; ++d) {
            for (int i = 1; i <= n; ++i) {
                int peak = 0;
                for (int j = i - 1; j >= 0; --j) {
                    peak = max(peak, jobDiffs[j]);
                    int prev = dp[d - 1][j];
                    if (prev != INT_MAX) {
                        dp[d][i] = min(dp[d][i], prev + peak);
                    }
                }
            }
        }

        return dp[day][n];
    }
};