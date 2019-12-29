#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int balancedString(string s) {
        n = s.size();
        freq.clear();

        for (auto ch : s) {
            ++freq[ch];
        }
        if (check()) return 0; // 本来就平衡了

        int j = 0;
        int res = n;
        
        for (int i = 0; i < n; ++i) {
            --freq[s[i]];

            // 如果剩下的平衡，则可以收敛
            while (check()) {
                res = min(res, i - j + 1); // 更新答案
                ++freq[s[j]];
                ++j;
            }
        }

        return res;
    }

    // 检查（除去窗口的）剩余字符串是否平衡
    bool check () {
        int limit = n / 4;
        for (char ch : "QWER") {
            if (freq[ch] > limit) return false;
        }
        return true;
    }

private:
    int n;
    unordered_map<char, int> freq; // 字母 => 个数
};