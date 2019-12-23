#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        const int n = intervals.size();
        if (n == 0) return 0;

        // 排序：end小的优先
        sort(intervals.begin(), intervals.end(), [&](vector<int> &A, vector<int> &B) {
            return A[1] < B[1];
        });

        int del = 0;
        int end = intervals[0][1];
        for (int i = 1; i < n; ++i) {
            if (intervals[i][0] < end) { // 相交，则删除一个
                ++del;
            } else { // 不相交，则更新/扩大end值（能检测到更多的相交）
                end = intervals[i][1];
            }
        }
        return del;
    }
};