/**
 * Top-down + 二分查找
 * 
 * 时间：大约O(NlogN), 32ms
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
    int numDistinct(string text, string p) {
        char2Index.clear();
        cache.clear();
        pattern = p;
        for (int i = 0; i < text.size(); ++i) {
            char2Index[text[i]].push_back(i);
        }

        return helper(0, -1);
    }

    /**
     * 递归函数
     * @param i pattern[i]
     * @param prev 前一个下标
     */
    int helper (int i, int prev) {
        if (i == pattern.size()) return 1;

        const string key = to_string(i) + "," + to_string(prev);
        if (cache.count(key)) return cache[key];

        int res = 0;
        vector<int> &index = char2Index[pattern[i]];
        auto it = upper_bound(index.begin(), index.end(), prev);
        for (; it != index.end(); ++it) {
            res += helper(i + 1, *it);
        }
        cache[key] = res;
        return res;
    }

private:
    unordered_map<char, vector<int>> char2Index; // 字符 => 下标数组
    string pattern;
    unordered_map<string, int> cache;
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
