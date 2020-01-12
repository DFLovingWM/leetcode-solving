/**
 * 动态规划：
 * 
 * 时间：`O(N^2)`, 12ms
 */

#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool checkValidString(string s) {
        str = s;
        const int n = str.size();
        cache = vector<vector<int>>(n + 1, vector<int>(n + 1, -1));
        return helper(0, 0);
    }

    bool helper(int i, int delta) {
        if (i == str.size()) return delta == 0; // 终止
        if (delta < 0) return false; // 剪枝

        if (cache[i][delta] != -1) return cache[i][delta];

        bool res = false;
        if (str[i] == '(') {
            res = helper(i + 1, delta + 1);
        } else if (str[i] == ')') {
            res = helper(i + 1, delta - 1);
        } else if (str[i] == '*') {
            res = helper(i + 1, delta) || helper(i + 1, delta + 1) || helper(i + 1, delta - 1); // 3种选择
        }
        return cache[i][delta] = res;
    }

private:
    string str;
    vector<vector<int>> cache;
};