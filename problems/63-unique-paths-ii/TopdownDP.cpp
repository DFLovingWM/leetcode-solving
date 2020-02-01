/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`, 8ms
 */

class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& _grid) {
        grid = _grid;
        R = grid.size();
        C = grid[0].size();

        // Edge case: 如果起/终点有障碍，不可能到达
        if (grid[0][0] == 1 || grid[R - 1][C - 1] == 1) return 0;

        dp = vector<vector<int>>(R, vector<int>(C, -1));
        return f(0, 0);
    }

    int f(int x, int y) {
        if (x == R - 1 && y == C - 1) return 1;
        if (dp[x][y] != -1) return dp[x][y];

        int res = 0;
        // 往下走
        if (x < R - 1 && grid[x + 1][y] == 0) {
            res += f(x + 1, y);
        }
        // 往右走
        if (y < C - 1 && grid[x][y + 1] == 0) {
            res += f(x, y + 1);
        }
        return dp[x][y] = res;
    }

private:
    int R, C;
    vector<vector<int>> grid;
    vector<vector<int>> dp;
};