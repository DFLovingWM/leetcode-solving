/**
 * 贪心
 * 
 * 时间：`O(M)`, 4ms
 */

class Solution {
public:
    int maximumSwap(int num) {
        string A = to_string(num); // 原数字
        string B(A); // 理想(最大)数字
        sort(B.begin(), B.end(), [&](const char &a, const char &b) {
            return a > b;
        });

        // 找到第一个不在理想位置上的数位`i`
        int i, n = A.size();
        for (i = 0; i < n; ++i) {
            if (A[i] != B[i]) break;
        }
        if (i == n) return stoi(A);

        // 让`i`跟它右边的最大数字都交换一遍，找最大值
        string res;
        char maxCh = '0';
        for (int j = i + 1; j < n; ++j) {
            if (A[j] > maxCh) maxCh = A[j];
        }
        for (int j = i + 1; j < n; ++j) {
            if (A[j] == maxCh) {
                string tmp(A);
                swap(tmp, i, j);
                if (tmp > res) res = tmp;
            }
        }

        return stoi(res);
    }

    void swap(string &S, int i, int j) {
        int v = S[i];
        S[i] = S[j];
        S[j] = v;
    }
};