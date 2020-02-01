/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`, 0ms
 */

class Solution {
public:
    int uniquePaths(int m, int n) {
        R = m;
        C = n;
        dp = vector<vector<int>>(R, vector<int>(C, -1));
        return helper(0, 0);
    }

    int helper(int x, int y) {
        if (x == R - 1 && y == C - 1) return 1;
        if (dp[x][y] != -1) return dp[x][y];

        int res = 0;
        // 向下走
        if (x < R - 1) {
            res += helper(x + 1, y);
        }
        // 向右走
        if (y < C - 1) {
            res += helper(x, y + 1);
        }
        return dp[x][y] = res;
    }

private:
    int R, C;
    vector<vector<int>> dp;
};