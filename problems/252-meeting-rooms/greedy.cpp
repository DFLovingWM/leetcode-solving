#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool canAttendMeetings(vector<vector<int>>& intervals) {
        // 排序：start小的优先
        sort(intervals.begin(), intervals.end(), [&](vector<int> &A, vector<int> &B) {
            return A[0] < B[0];
        });

        // 只需要比较相邻的
        for (int i = 1; i < intervals.size(); ++i) {
            if (intervals[i][0] < intervals[i - 1][1]) { // 一旦有相交 => 失败
                return false;
            }
        }
        return true;
    }
};