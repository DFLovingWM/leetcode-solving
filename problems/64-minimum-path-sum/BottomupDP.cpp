/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2)`, 4ms
 */

class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        const int m = grid.size(), n = grid[0].size();
        // dp[i][j]表示走到(i, j)的最小路径和
        vector<vector<int>> dp(m, vector<int>(n, INT_MAX));

        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (i == 0 && j == 0) {
                    dp[i][j] = grid[i][j];
                } else if (i == 0) {
                    dp[i][j] = dp[i][j-1] + grid[i][j];
                } else if (j == 0) {
                    dp[i][j] = dp[i-1][j] + grid[i][j];
                } else {
                    dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]);
                }
            }
        }

        return dp[m-1][n-1];
    }
};