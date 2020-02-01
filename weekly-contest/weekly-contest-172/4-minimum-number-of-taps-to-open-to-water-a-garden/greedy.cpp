/**
 * 贪心
 */

#include <vector>
#include <algorithm>
using namespace std;

typedef vector<int> Interval;

class Solution {
public:
    int minTaps(int n, vector<int>& ranges) {
        vector<Interval> intervals;
        for (int i = 0; i < ranges.size(); ++i) {
            int left = max(i - ranges[i], 0);
            int right = max(i + ranges[i], 0);
            if (left != right) {
                intervals.push_back({ left, right });
            }
        }
        sort(intervals.begin(), intervals.end(), [&](const Interval &A, const Interval &B) {
            return A[0] < B[0];
        });

        int res = 0;
        int end = 0;
        for (int i = 0; i < intervals.size() && end < n; ) {
            int bestJ = -1;
            int j;
            for (j = i; j < intervals.size() && intervals[j][0] <= end; ++j) {
                if (bestJ == -1 || intervals[j][1] > intervals[bestJ][1]) {
                    bestJ = j;
                }
            }
            if (bestJ == -1) return -1; // 接不上了 => 失败

            ++res;
            end = intervals[bestJ][1];
            i = j;
        }

        return end < n ? -1 : res;
    }
};