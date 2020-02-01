/**
 * 找环
 * 
 * 时间：`O(256)`, 4ms
 */

class Solution {
public:
    vector<int> prisonAfterNDays(vector<int>& cells, int N) {
        // 循环，同时尝试寻找环
        unordered_map<int, int> bit2Order; // 记录出现过的次序
        vector<int> prev(cells);
        int n, bit;
        for (n = 1; n <= N; ++n) {
            vector<int> curr(8);
            bit = 0;

            for (int i = 0; i < 8; ++i) {
                if (i - 1 >= 0 && i + 1 < 8 && prev[i - 1] == prev[i + 1]) {
                    curr[i] = 1;
                } else {
                    curr[i] = 0;
                }
                bit |= curr[i] << i;
            }

            if (bit2Order.count(bit)) {
                break;
            }
            bit2Order[bit] = n;
            prev = curr;
        }

        // 在N之内没有环，直接返回答案
        if (n > N) {
            return prev;
        }

        // 有环，则根据周期减少N
        int cycle = n - bit2Order[bit];
        N = (N - bit2Order[bit]) % cycle + bit2Order[bit];

        // 然后重新来一遍，最多N次
        prev = cells;
        for (n = 0; n < N; ++n) {
            vector<int> curr(8);
            for (int i = 0; i < 8; ++i) {
                if (i - 1 >= 0 && i + 1 < 8 && prev[i - 1] == prev[i + 1]) {
                    curr[i] = 1;
                } else {
                    curr[i] = 0;
                }
            }
            prev = curr;
        }
        return prev;
    }
};