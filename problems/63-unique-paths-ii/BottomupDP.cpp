/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2)`, 8ms
 */

typedef long long ll;

class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& grid) {
        const int m = grid.size(), n = grid[0].size();
        // dp[i][j]表示走到(i, j)的路径数
        vector<vector<ll>> dp(m, vector<ll>(n, 0));

        for (int j = 0; j < n; ++j) {
            if (grid[0][j] == 1) break;
            dp[0][j] = 1;
        }
        for (int i = 0; i < m; ++i) {
            if (grid[i][0] == 1) break;
            dp[i][0] = 1;
        }

        for (int i = 1; i < m; ++i) {
            for (int j = 1; j < n; ++j) {
                if (grid[i][j] == 0) { // 该位置可达
                    dp[i][j] += dp[i-1][j] + dp[i][j-1];
                }
            }
        }

        return (int) dp[m-1][n-1];
    }
};