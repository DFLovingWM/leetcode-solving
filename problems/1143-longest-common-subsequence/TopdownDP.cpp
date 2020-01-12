/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`, 56ms
 */

#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    int longestCommonSubsequence(string a, string b) {
        A = a;
        B = b;
        dp = vector<vector<int>>(A.size() + 1, vector<int>(B.size() + 1, -1));
        return helper(0, 0);
    }

    int helper(int i, int j) {
        if (i == A.size() || j == B.size()) return 0;
        if (dp[i][j] != -1) return dp[i][j];

        int res = 0;
        if (A[i] == B[j]) { // 相等 => 只有1种策略，即肯定要匹配（有点贪心的味道）
            res = max(res, 1 + helper(i + 1, j + 1));
        } else { // 不相等 => 2种策略
            res = max(res, helper(i + 1, j)); // 放弃i、保留j
            res = max(res, helper(i, j + 1)); // 保留i、放弃j
        }
        return dp[i][j] = res;
    }

private:
    vector<vector<int>> dp;
    string A, B;
};