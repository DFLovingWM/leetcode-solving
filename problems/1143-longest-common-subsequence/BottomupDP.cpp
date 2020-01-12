/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2)`, 24ms
 */

#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    int longestCommonSubsequence(string A, string B) {
        const int aLen = A.size();
        const int bLen = B.size();
        vector<vector<int>> dp(aLen + 1, vector<int>(bLen + 1, 0));
        for (int i = 1; i <= aLen; ++i) {
            for (int j = 1; j <= bLen; ++j) {
                if (A[i-1] == B[j-1]) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[aLen][bLen];
    }
};