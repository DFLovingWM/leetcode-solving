/**
 * 大数相加
 * 
 * 时间：`O(N)`, 40ms
 */

class Solution {
public:
    vector<int> addToArrayForm(vector<int>& A, int K) {
        vector<int> res;
        int carry = 0;

        // 算
        for (int i = A.size() - 1; i >= 0; --i, K /= 10) {
            int tmp = carry + A[i] + K % 10;
            carry = tmp / 10;
            res.push_back(tmp % 10);
        }
        // 如果K还有剩余
        for (; K; K /= 10) {
            int tmp = carry + K % 10;
            carry = tmp / 10;
            res.push_back(tmp % 10);
        }
        // 最后的进位
        if (carry) res.push_back(carry);

        reverse(res.begin(), res.end());
        return res;
    }
};