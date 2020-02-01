/**
 * DP + 二分
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int superEggDrop(int K, int N) {
        dp = vector<vector<vector<int>>>(K + 1, vector<vector<int>>(N + 1, vector<int>(N + 1, -1)));
        return helper(1, N);
    }

    // 对于每个状态有两种策略：（1）二分；（2）线性
    int helper(int egg, int left, int right) {
        if (left >= right) return 0;
        if (egg == 0) return INT_MAX;

        // 取缓存
        if (dp[egg][left][right] != -1) {
            return dp[egg][left][right];
        }

        int res = INT_MAX;
        // 线性
        for (int i = left; i <= right; ++i) {
            res = min(res, i - left + helper())
        }
        return dp[egg][left][right] = res;
    }

private:
    vector<vector<vector<int>>> dp;
};