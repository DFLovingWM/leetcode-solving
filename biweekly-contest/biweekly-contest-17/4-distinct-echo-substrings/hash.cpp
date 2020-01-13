/**
 * 字符串哈希
 * 
 * 时间：`O(N^2)`, 96ms
 */

#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
using namespace std;

typedef unsigned long long ULL;
const ULL BASE = 37;

class Solution {
public:
    int distinctEchoSubstrings(string text) {
        vector<ULL> h = {0}; // 哈希前缀和
        vector<ULL> power = {1}; // 快捷计算：BASE的i次方
        for (char ch : text) {
            h.push_back(h.back() * BASE + ch - 'a' + 1); // 字母映射为数字：a-1、b-2……z-26。a不对应0，是为了避免a与aa都是0
            power.push_back(power.back() * BASE);
        }

        const int n = text.size();
        unordered_set<ULL> res; // 用以去重
        // 遍历所有子串
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; j += 2) { // 这里保证偶数长度
                int len = (j - i + 1) / 2;

                ULL left = h[i + len] - h[i] * power[len];
                ULL right = h[j + 1] - h[i + len] * power[len];
                if (left == right) {
                    res.insert(left);
                }
            }
        }
        return res.size();
    }
};

int main () {
    cout << Solution().distinctEchoSubstrings("aaaaaaaaaa") << endl;
    return 0;
}