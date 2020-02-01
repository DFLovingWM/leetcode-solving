/**
 * （状压）Top-down DP
 * 
 * 时间：`O(MN * 2^(MN))`, 780ms
 */

class Solution {
public:
    int uniquePathsIII(vector<vector<int>>& _grid) {
        grid = _grid;
        m = grid.size();
        n = grid[0].size();

        target = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] != -1) target |= bit(i, j);
                if (grid[i][j] == 1) {
                    startX = i;
                    startY = j;
                } else if (grid[i][j] == 2) {
                    endX = i;
                    endY = j;
                }
            }
        }
        dp = vector<vector<vector<int>>>(m, vector<vector<int>>(n, vector<int>(1 << (m * n), -1)));
        return helper(startX, startY, bit(startX, startY));
    }

    // DP函数
    int helper(int x, int y, int cover) {
        if (x == endX && y == endY) {
            if (cover == target) return 1;
            return 0;
        }
        if (dp[x][y][cover] != -1) return dp[x][y][cover];
        
        int res = 0;
        for (auto &dir : DIRS) {
            int nx = x + dir[0];
            int ny = y + dir[1];
            if (!isValid(nx, ny) || grid[nx][ny] == -1) continue;
            int k = bit(nx, ny);
            if ((cover & k) == 0) {
                res += helper(nx, ny, cover | k);
            }
        }
        return dp[x][y][cover] = res;
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }

    // 哈希（状压）：坐标 => 二进制位
    int bit(int x, int y) {
        return 1 << (x * n + y);
    }

private:
    int m, n;
    int startX, startY, endX, endY;
    vector<vector<int>> grid;
    const vector<vector<int>> DIRS = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};
    int target;
    vector<vector<vector<int>>> dp;
};