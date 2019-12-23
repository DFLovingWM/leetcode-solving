/**
 * 合并区间的思路
 * 
 * 时间：`O(NlogN)`, 168ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Interval {
public:
    int start;
    int end;
    Interval() {}
    Interval(int _start, int _end) {
        start = _start;
        end = _end;
    }
};

class Solution {
public:
    vector<Interval> employeeFreeTime(vector<vector<Interval>> schedules) {
        // 拍平
        vector<Interval> intervals;
        for (auto schedule : schedules) {
            for (auto interval : schedule) {
                intervals.push_back(interval);
            }
        }

        // 排序
        sort(intervals.begin(), intervals.end(), [&](const Interval &A, const Interval &B) {
            return A.start < B.start;
        });

        // 扫描
        vector<Interval> res;
        int end = intervals[0].end;
        for (int i = 1; i < intervals.size(); ++i) {
            if (intervals[i].start > end) { // 不相交
                res.push_back(Interval(end, intervals[i].start));   
            }
            end = max(end, intervals[i].end);
        }

        return res;
    }
};