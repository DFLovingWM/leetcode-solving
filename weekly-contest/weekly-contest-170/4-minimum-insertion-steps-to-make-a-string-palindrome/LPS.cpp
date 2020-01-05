/**
 * 求最长回文子串(LPS)，然后剩余字符都是要匹配的（有点贪心的味道）
 * 
 * 时间：`O(N^2)`, 44ms
 */

#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minInsertions(string s) {
        const int n = s.size();
        vector<vector<int>> dp(n , vector<int>(n , 0));

        for (int i = n - 1; i >= 0; --i) { // 逆序
            dp[i][i] = 1; // 奇回文
            for (int j = i + 1; j < n; ++j) { // 顺序
                if (s[i] == s[j]) {
                    dp[i][j] = dp[i+1][j-1] + 2;
                } else {
                    dp[i][j] = max(dp[i+1][j], dp[i][j-1]);
                }
            }
        }

        return n - dp[0][n-1];
    }
};