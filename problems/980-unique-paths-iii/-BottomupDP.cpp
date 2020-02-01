/**
 * （状压）Bottom-up DP
 * 
 * 时间：`O(MN * 2^(MN))`, 780ms
 */

class Solution {
public:
    int uniquePathsIII(vector<vector<int>>& grid) {
        m = grid.size();
        n = grid[0].size();

        int startX, startY, endX, endY;
        int target = 0;
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

        int K = 1 << (m * n);
        // dp[i][j][k]表示到达(i, j)、路径覆盖为k的路径数
        vector<vector<vector<int>>> dp(m, vector<vector<int>>(n, vector<int>(K, 0)));
        dp[startX][startY][bit(startX, startY)] = 1;
        for (int cover = 0; cover <= target; ++cover) {
            for (int i = 0; i < m; ++i) {
                for (int j = 0; j < n; ++j) {
                    if (grid[i][j] == -1) continue;

                    for (auto &dir : DIRS) {
                        int pi = i + dir[0], pj = j + dir[1]; // 上一个坐标
                        if (!isValid(pi, pj)) continue;
                        int k = bit(pi, pj);
                        if (cover & k) {
                            dp[i][j][cover] += dp[pi][pj][cover ^ k];
                        }
                    }
                }
            }
        }
        return dp[endX][endY][target];
    }

    int bit(int x, int y) {
        return 1 << (x * n + y);
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }

private:
    int m, n;
    const vector<vector<int>> DIRS = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};
};