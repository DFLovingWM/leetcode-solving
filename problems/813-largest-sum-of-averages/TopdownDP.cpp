/**
 * Top-down DP
 * 
 * 时间：`O(N^3)`，20ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    double largestSumOfAverages(vector<int>& A, int K) {
        n = A.size();
        dp = vector<vector<double>>(n + 1, vector<double>(K + 1, 0));
        for (int i = 0; i < n; ++i) {
            P.push_back(P.back() + A[i]);
        }
        return helper(0, K);
    }

    double helper(int i, int k) {
        if (k == 0) {
            if (i == n) return 0;
            return -1e8;
        }
        if (dp[i][k] != 0) return dp[i][k];

        double res = -1e8;
        for (int j = i; j < n; ++j) { // j表示右边界(包含)
            double curr = (double) (P[j + 1] - P[i]) / (j - i + 1) + helper(j + 1, k - 1);
            res = max(res, curr);
        }
        return dp[i][k] = res;
    }

private:
    int n;
    vector<int> P = {0}; // 前缀和
    vector<vector<double>> dp; // 缓存
};