/**
 * 贪心：从左到右扫描一次、再从右到左扫描一次，取更小值
 * 
 * 时间：`O(N)`, 0ms
 */

class Solution {
public:
    vector<int> shortestToChar(string S, char pivot) {
        const int n = S.size();
        vector<int> res(n, INT_MAX);

        // 从左到右扫描，求离左边最近的pivot的距离
        int last = -1; // last表示左边最近的pivot所在下标
        for (int i = 0; i < n; ++i) {
            if (S[i] == pivot) {
                res[i] = 0;
                last = i;
            } else if (last >= 0) {
                res[i] = min(res[i], i - last);
            }
        }

        // 从右到左扫描，求离右边最近的pivot的距离
        last = n; // 此时last表示右边最近的pivot所在下标
        for (int i = n - 1; i >= 0; --i) {
            if (S[i] == pivot) {
                // res[i] = 0;
                last = i;
            } else if (last < n) {
                res[i] = min(res[i], last - i);
            }
        }

        return res;
    }
};