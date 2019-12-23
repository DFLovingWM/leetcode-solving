/**
 * DP：
 * 时间：O(N^3), 368ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& arr) {
        const int R = arr.size();
        const int C = arr[0].size();
        const int INF = 20000;

        // 定义：dp[i][j]表示前i行，最后落在第j列的最小和
        vector<vector<int>> dp(R + 1, vector<int>(C, INF));
        // 边界
        for (int j = 0; j < C; ++j) dp[0][j] = 0;
        // 迭代
        for (int i = 1; i <= R; ++i) {
            for (int j = 0; j < C; ++j) {
                // 找上一行除了j列以外的min
                for (int k = 0; k < C; ++k) {
                    if (k != j) {
                        dp[i][j] = min(dp[i][j], dp[i - 1][k] + arr[i - 1][j]);
                    }
                }
            }
        }
        // 目标
        int res = INF;
        for (int j = 0; j < C; ++j) {
            res = min(res, dp[R][j]);
        }
        return res;
    }
};