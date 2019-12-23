/**
 * 贪心（maxSize无用）/滑动窗口
 * 
 * 时间：O(N), 188ms
 */

#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxFreq(string S, int maxLetters, int len, int _) {
        unordered_map<string, int> stringFreq; // 字符串哈希 => 个数
        unordered_map<char, int> freq; // 字符 => 个数

        // 初始化窗口
        int i; // 终点
        for (i = 0; i < len; ++i) {
            ++freq[S[i]];
        }
        if (freq.size() <= maxLetters) {
            ++stringFreq[S.substr(0, len)];
        }

        // 对固定窗口进行滑动
        for (; i < S.size(); ++i) {
            ++freq[S[i]];

            char oldCh = S[i - len];
            --freq[oldCh];
            if (freq[oldCh] == 0) freq.erase(oldCh);

            if (freq.size() <= maxLetters) {
                ++stringFreq[S.substr(i - len + 1, len)];
            }
        }

        int res = 0;
        for (auto p : stringFreq) {
            // cout << p.first << ": " << p.second << endl;
            res = max(res, p.second);
        }

        return res;
    }
};

// int main () {
//     ifstream cin("in");
//     int t;
//     cin >> t;
//     Solution solution = Solution();
//     while (t--) {
//         string s;
//         int a, b, c;
//         cin >> s >> a >> b >> c;
//         cout << solution.maxFreq(s, a, b, c) << endl;
//     }
//     return 0;
// }