/**
 * DP + 预处理min
 * 时间：O(N^2), 32ms
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
            // 提前算出每一个j对应的min
            vector<int> minExclude = getMin(dp[i - 1]);
            // 遍历每一列
            for (int j = 0; j < C; ++j) {
                dp[i][j] = minExclude[j] + arr[i - 1][j];
            }
        }

        // 目标
        int res = INF;
        for (int j = 0; j < C; ++j) {
            res = min(res, dp[R][j]);
        }
        return res;
    }

private:
    // 获取某一行中，除自己以外的min
    vector<int> getMin (vector<int> row) {
        const int n = row.size();
        const int INF = 20000;

        vector<int> leftMin(n);
        leftMin[0] = INF;
        for (int i = 1; i < n; ++i) {
            leftMin[i] = min(leftMin[i - 1], row[i - 1]);
        }

        vector<int> rightMin(n);
        rightMin[n - 1] = INF;
        for (int i = n - 2; i >= 0; --i) {
            rightMin[i] = min(rightMin[i + 1], row[i + 1]);
        }

        vector<int> res(n);
        for (int i = 0; i < n; ++i) {
            res[i] = min(leftMin[i], rightMin[i]);
        }
        return res;
    }
};