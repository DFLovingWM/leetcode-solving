/**
 * 贪心（区间问题）
 * 
 * 时间：`O(NlogN)`, 56ms
 */

class Solution {
public:
    int findLongestChain(vector<vector<int>>& pairs) {
        // 排序：按照结束时间
        sort(pairs.begin(), pairs.end(), [&](const vector<int> &A, const vector<int> &B) {
            return A[1] < B[1];
        });

        int res = 1;
        int maxEnd = pairs[0][1];
        for (int i = 1; i < pairs.size(); ++i) {
            auto &curr = pairs[i];
            if (curr[0] > maxEnd) { // 不相交
                ++res;
                maxEnd = curr[1];
            }
        }
        return res;
    }
};