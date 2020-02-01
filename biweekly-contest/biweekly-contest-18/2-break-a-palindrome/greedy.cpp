/**
 * 贪心
 *
 * 时间：`O(N)`, 4ms
 */

class Solution {
public:
    string breakPalindrome(string S) {
        const int n = S.size();
        if (n == 1) return ""; // 无论如何都是回文串，所以无法做到 => 返回空串

        int i;
        for (i = 0; i < n; ++i) {
            // 将`非a`替换为`a`
            // 但需要注意：不能替换奇回文的中间字符
            if (n % 2 == 1 && i == n / 2) continue;
            if (S[i] != 'a') {
                S[i] = 'a';
                break;
            }
        }
        if (i == n) S[n - 1] = 'b';
        return S;
    }
};