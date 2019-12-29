/**
 * Bottom-up DP：空间压缩
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

        // 定义：dp[j]表示s1[:i]与s2[:j]能否匹配
        vector<bool> dp(s2.size() + 1, false);

        // 迭代（包含边界情况）
        for (int i = 0; i <= l1; ++i) {
            for (int j = 0; j <= l2; ++j) {
                if (i == 0 && j == 0) {
                    dp[j] = true;
                    continue;
                }

                char ch = s3[i + j - 1];

                if (i == 0) {
                    dp[j] = dp[j - 1] && s2[j - 1] == ch;
                } else if (j == 0) {
                    dp[j] = dp[j] && s1[i - 1] == ch;
                } else {
                    dp[j] = (dp[j] && s1[i - 1] == ch) || (dp[j - 1] && s2[j - 1] == ch);
                }
            }
        }

        // 目标值
        return dp[l2];
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