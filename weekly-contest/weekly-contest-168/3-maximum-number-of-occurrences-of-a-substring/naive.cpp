/**
 * 暴力枚举
 * 
 * 时间：O(KN), 1656ms
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
    int maxFreq(string s, const int &maxLetters, const int &minSize, const int &maxSize) {
        const int n = s.size();
        unordered_map<string, int> word2Count;

        // 枚举起点
        for (int i = 0; i <= n - minSize; ++i) {
            unordered_map<char, int> freq; // 当前子串频次
            string curr;
            int j; // 终点

            // 首先要达到最小长度
            for (j = i; curr.size() < minSize - 1; ++j) {
                ++freq[s[j]];
                curr.push_back(s[j]);
            }

            // 增加到最大长度
            for (; j < n; ++j) {
                ++freq[s[j]];
                curr.push_back(s[j]);
                if (curr.size() <= maxSize && freq.size() <= maxLetters) { // 如果频次满足要求，则加入结果集
                    ++word2Count[curr];
                } else { // 否则，可以提前退出了
                    break;
                }
            }
        }

        // 找最大频次
        int res = 0;
        for (auto p : word2Count) {
            res = max(res, p.second);
        }
        return res;
    }
};