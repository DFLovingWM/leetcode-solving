/**
 * Bottom-up + Next数组(优化时间)
 * 
 * 时间：`O(NM)`, 8ms
 * 空间：`O(M)`
 */

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

typedef unsigned long long ll;

class Solution {
public:
    int numDistinct(string text, string pattern) {
        const int T = text.size(), P = pattern.size();

        // dp[i][j]表示text[:i]与pattern[:j]的匹配数
        vector<ll> dp(P + 1, 0);
        dp[0] = 1;

        for (int i = 1; i <= T; ++i) {
            for (int j = P; j >= 1; --j) { // 压缩到一维空间了，需要逆序遍历
                if (text[i - 1] == pattern[j - 1]) {
                    dp[j] += dp[j - 1];
                }
            }
        }

        return dp[P];
    }
};

int main () {
    ifstream cin("in");

    int t;
    cin >> t;
    Solution s = Solution();
    while (t--) {
        string a, b;
        cin >> a >> b;
        cout << s.numDistinct(a, b) << endl;
    }
    return 0;
}
