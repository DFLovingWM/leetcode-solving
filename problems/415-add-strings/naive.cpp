/**
 * 大数相加
 * 
 * 时间：`O(N)`, 8ms
 */

class Solution {
public:
    string addStrings(string A, string B) {
        reverse(A.begin(), A.end());
        reverse(B.begin(), B.end());

        string res;
        int i = 0, j = 0, carry = 0;

        while (i < A.size() && j < B.size()) {
            int tmp = carry + (A[i++] - '0') + (B[j++] - '0');
            carry = tmp / 10;
            res.push_back(tmp % 10 + '0');
        }
        while (i < A.size()) {
            int tmp = carry + (A[i++] - '0');
            carry = tmp / 10;
            res.push_back(tmp % 10 + '0');
        }
        while (j < B.size()) {
            int tmp = carry + (B[j++] - '0');
            carry = tmp / 10;
            res.push_back(tmp % 10 + '0');
        }
        if (carry > 0) res.push_back(carry + '0');

        reverse(res.begin(), res.end());
        return res;
    }
};