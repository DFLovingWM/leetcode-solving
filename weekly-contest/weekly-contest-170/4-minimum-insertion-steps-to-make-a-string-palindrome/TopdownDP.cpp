/**
 * 动态规划
 * 
 * 时间：`O(N^3)`
 */

#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int minInsertions(string s) {
        str = s;
        const int n = str.size();
        cache = vector<vector<int>>(n, vector<int>(n, -1));

        int res = n;
        for (int i = 0; i < str.size(); ++i) {
            res = min(res, helper(i, i));
            if (i + 1 < str.size()) {
                res = min(res, helper(i, i + 1));
            }
        }
        return res;
    }

    int helper(int i, int j) {
        if (i < 0) return str.size() - j;
        if (j >= str.size()) return i + 1;
        
        if (cache[i][j] != -1) return cache[i][j];

        int res = 0;
        if (str[i] == str[j]) { // 相等，则匹配
            res += helper(i - 1, j + 1);
        } else { // 不相等，要么左匹配，要么右匹配
            int left = helper(i - 1, j);
            int right = helper(i, j + 1);
            res += 1 + min(left, right);
        }
        return cache[i][j] = res;
    }

private:
    string str;
    vector<vector<int>> cache;
};