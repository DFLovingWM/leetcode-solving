/**
 * 中心扩展法
 * 
 * 时间：`O(N^2)`, 4ms
 */

class Solution {
public:
    int countSubstrings(string s) {
        str = s;
        n = s.size();
        res = 0;

        for (int i = 0; i < n; ++i) {
            expand(i, i); // 奇回文
            if (i + 1 < n) expand(i, i + 1); // 偶回文
        }

        return res;
    }

    void expand(int i, int j) {
        for (; i >= 0 && j < n && str[i] == str[j]; --i, ++j) {
            ++res;
        }
    }

private:
    string str;
    int n;
    int res;
};