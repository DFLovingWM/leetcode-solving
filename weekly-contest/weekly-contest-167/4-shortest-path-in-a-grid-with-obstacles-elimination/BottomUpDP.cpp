/**
 * Bottom-up DP
 * 
 * 时间：`O(M^2 * N^2 * K)`, 348ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int shortestPath(vector<vector<int>>& grid, int K) {
        const int R = grid.size();
        const int C = grid[0].size();
        const int MAX = R * C;

        // `dp[x][y][k]`表示使用了`k`次消除后到达`(x, y)`所用的最小步数
        vector<vector<vector<int>>> dp(R + 2, vector<vector<int>>(C + 2, vector<int>(K + 1, MAX)));
        dp[1][1][0] = 0; // 下标有1偏移
        int res = MAX;

        for (int s = 0; s < 3; ++s) { // 迭代次数
            for (int i = 1; i <= R; ++i) {
                for (int j = 1; j <= C; ++j) {
                    int ch = grid[i - 1][j - 1]; // 注意下标要减1
                    for (int k = 0; k + ch <= K; ++k) {
                        dp[i][j][k + ch] = min(
                            dp[i][j][k + ch],
                            1 + min({ dp[i-1][j][k], dp[i][j-1][k], dp[i+1][j][k], dp[i][j+1][k] })
                        );
                        if (i == R && j == C) {
                            res = min(res, dp[i][j][k + ch]);
                        }
                    }
                }
            }
        }

        return res == MAX ? -1 : res;
    }
};