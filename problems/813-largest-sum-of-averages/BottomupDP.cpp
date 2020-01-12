/**
 * Bottom-up DP
 * 
 * 时间：`O(N^3)`，8ms
 */

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    double largestSumOfAverages(vector<int>& A, int K) {
        const int n = A.size();

        // 前缀和
        vector<double> P = {0};
        for (int a : A) {
            P.push_back(P.back() + a);
        }

        // dp[i][k]表示将前i个元素切成k段的最大分数
        vector<vector<double>> dp(n + 1, vector<double>(K + 1, 0));
        for (int i = 1; i <= n; ++i) {
            dp[i][1] = (P[i] - P[0]) / i; // 切成1段，初始化

            for (int k = 2; k <= K; ++k) {
                for (int j = k - 1; j < i; ++j) { // `j`的含义：前`j`个数字被分为`k-1`段（因为每一段至少有1个数字，所以从`k-1`开始会更快）
                    double tmp = dp[j][k - 1] + // 前(k-1)段
                        (P[i] - P[j]) / (i - j); // 拼接
                    dp[i][k] = max(dp[i][k], tmp);
                }
            }
        }
        return dp[n][K];
    }
};