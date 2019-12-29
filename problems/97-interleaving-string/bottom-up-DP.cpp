/**
 * Bottom-up DP
 */

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool isInterleave(string s1, string s2, string s3) {
        const int l1 = s1.size(), l2 = s2.size(), l3 = s3.size();
        if (l1 + l2 != l3) return false;

        // 定义：dp[i][j]表示s1[:i]与s2[:j]能否匹配
        vector<vector<bool>> dp(l1 + 1, vector<bool>(l2 + 1, false));

        // 边界：第0行、第0列
        dp[0][0] = true;
        for (int j = 1; j <= l2; ++j) {
            dp[0][j] = dp[0][j - 1] && s2[j - 1] == s3[j - 1];
        }
        for (int i = 1; i <= l1; ++i) {
            dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1];
        }

        // 迭代
        for (int i = 1; i <= l1; ++i) {
            for (int j = 1; j <= l2; ++j) {
                char ch = s3[i + j - 1];
                dp[i][j] = (dp[i-1][j] && s1[i-1] == ch) || (dp[i][j-1] && s2[j-1] == ch);
            }
        }

        // 目标值
        return dp[l1][l2];
    }
};

int main () {
    ifstream cin("in");
    Solution s = Solution();
    int t;
    cin >> t;
    while (t--) {
        string a, b, c;
        cin >> a >> b >> c;
        cout << s.isInterleave(a, b, c) << endl;
    }
    return 0;
};