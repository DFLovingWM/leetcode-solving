/**
 * 暴力
 * 
 * 时间：`O(N^3)`, 2084ms
 */

#include <unordered_set>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    int distinctEchoSubstrings(string text) {
        const int n = text.size();
        unordered_set<string> res; // 用集合去重

        for (int i = 0; i < n; ++i) {
            for (int j = i; j < n; ++j) {
                if ((j - i + 1) % 2 == 0) { // 子串长度必须为偶数
                    if (judge(text, i, j)) {
                        res.insert(text.substr(i, (j - i + 1) / 2));
                    }
                }
            }
        }

        return res.size();
    }

    bool judge(string& text, int i, int j) {
        int k = (j - i + 1) / 2;
        j = i + k;
        int l = i, r = j;
        while (l < j) {
            if (text[l] != text[r]) return false;
            ++l;
            ++r;
        }
        return true;
    }
};