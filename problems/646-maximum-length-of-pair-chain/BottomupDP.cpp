/**
 * 排序（转化为最长上升子序列问题） + DP
 * 
 * 时间：`O(N^2)`, 168ms
 */

class Solution {
public:
    int findLongestChain(vector<vector<int>>& pairs) {
        // 排序
        sort(pairs.begin(), pairs.end(), [&](const vector<int> &A, const vector<int> &B) {
            if (A[0] != B[0]) return A[0] < B[0];
            return A[1] < B[1];
        });

        // DP
        const int n = pairs.size();
        vector<int> dp(n, 1);
        int res = 1;

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (pairs[i][0] > pairs[j][1]) { // 能拼接
                    dp[i] = max(dp[i], dp[j] + 1);
                }
            }
            res = max(res, dp[i]);
        }

        return res;
    }
};