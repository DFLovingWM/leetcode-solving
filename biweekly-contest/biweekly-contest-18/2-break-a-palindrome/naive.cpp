/**
 * 暴力法
 *
 * 时间：`O(N^2)`, 956ms
 */

class Solution {
public:
    string breakPalindrome(string S) {
        const int n = S.size();
        string res;
        for (int i = 0; i < n; ++i) { // 枚举所有可替换的位置
            for (int c = 0; c < 26; ++c) { // 枚举所有小写字母
                string tmp = S.substr(0, i) + (char) ('a' + c) + S.substr(i + 1, n - i - 1);
                if (!isPalindrome(tmp)) {
                    if (res == "" || tmp < res) {
                        res = tmp;
                    }
                }
            }
        }
        return res;
    }

    bool isPalindrome(string &S) {
        int L = 0, R = S.size() - 1;
        while (L < R) {
            if (S[L] != S[R]) return false;
            ++L;
            --R;
        }
        return true;
    }
};