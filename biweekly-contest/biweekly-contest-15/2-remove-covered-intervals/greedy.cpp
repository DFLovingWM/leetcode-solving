/**
 * 贪心/排序：O(NlogN), 24ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& intervals) {
        // 保证“大”区间在前面
        sort(intervals.begin(), intervals.end(), [&](vector<int>& A, vector<int>& B) {
            if (A[0] != B[0]) return A[0] < B[0]; // 1、start更小的在前
            return A[1] > B[1]; // 2、start相等时，end更大的在前
        });

        int n = intervals.size();
        int res = n;
        int maxRight = intervals[0][1];
        for (int i = 1; i < n; ++i) {
            if (intervals[i][1] > maxRight) { // 当前区间没有被包含，即right更大，所以更新right（以更容易包含其它区间）
                maxRight = intervals[i][1];
            } else { // 被包含，则减少1个（沿用right）
                --res;
            }
        }
        return res;
    }
};