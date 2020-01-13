#include <string>
#include <vector>
using namespace std;

const int MOD = 1e9 + 7;

class Solution {
public:
    int numPermsDISequence(string S) {
        text = S;
        n = text.size();
        dp = vector<vector<int>>(n, vector<int>(n + 1, -1));

        int res = 0;
        for (int i = 0; i <= n; ++i) { // 首数字可以是0~n
            res += helper(0, i);
        }

        return res;
    }

    int helper(int i, int prev) {
        if (i == text.size()) return 1; // 组成一个排列，+1
        if (dp[i][prev] != -1) return dp[i][prev];

        int res = 0;
        if (text[i] == 'D') { // 要减小
            for (int next = prev - 1; next >= 0; --next) {
                res = (res + helper(i + 1, next)) % MOD;
            }
        } else if (text[i] == 'I') { // 要增加
            for (int next = prev + 1; next <= n; ++next) {
                res = (res + helper(i + 1, next)) % MOD;
            }
        }
        return dp[i][prev] = res;
    }

private:
    string text;
    int n;
    vector<vector<int>> dp;
};