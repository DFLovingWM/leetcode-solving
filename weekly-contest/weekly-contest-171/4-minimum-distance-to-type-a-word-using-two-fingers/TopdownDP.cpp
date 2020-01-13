/**
 * Topdown DP
 * 
 * 时间：`O(N^3)`, 844ms
 */

#include <string>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minimumDistance(string w) {
        word = w;
        unordered_set<char> charset(word.begin(), word.end());
        vector<char> chars(charset.begin(), charset.end());
        const int m = chars.size();
        int res = INT_MAX;
        for (int i = 0; i < m; ++i) {
            for (int j = i + 1; j < m; ++j) {
                res = min(res, helper(0, chars[i], chars[j]));
            }
        }
        return res;
    }

    int helper(int i, char first, char second) {
        if (i == word.size()) return 0;
        
        string key = to_string(i) + "," + to_string(first) + "," + to_string(second); // 将状态哈希成字符串（感觉不大好，不过就这样吧）
        if (cache.count(key)) return cache[key];

        int f = dist(first, word[i]);
        int s = dist(second, word[i]);
        int res = min(
            f + helper(i + 1, word[i], second),
            s + helper(i + 1, first, word[i])
        );
        return cache[key] = res;
    }

    int dist(char a, char b) {
        int A = a - 'A', B = b - 'A';
        int ax = A / 6, ay = A % 6;
        int bx = B / 6, by = B % 6;
        return abs(ax - bx) + abs(ay - by);
    }

private:
    string word;
    unordered_map<string, int> cache;
};