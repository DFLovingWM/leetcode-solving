/**
 * Top-down
 * 
 * 时间：O(N^2), 180ms
 */

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int numDistinct(string t, string p) {
        text = t;
        pattern = p;
        cache.clear();

        return helper(0, 0);
    }

    int helper (int i, int j) {
        if (j == pattern.size()) return 1;
        if (i == text.size()) return 0;

        const int key = i * (pattern.size() + 1) + j;
        if (cache.count(key)) return cache[key];

        int res = 0;
        // 不匹配
        res += helper(i + 1, j);
        // 匹配
        if (text[i] == pattern[j]) {
            res += helper(i + 1, j + 1);
        }
        cache[key] = res;
        return res;
    }

private:
    string text, pattern;
    unordered_map<int, int> cache;
};
