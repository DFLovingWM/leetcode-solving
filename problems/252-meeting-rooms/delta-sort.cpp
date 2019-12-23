#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool canAttendMeetings(vector<vector<int>>& intervals) {
        // 将所有开始、结束结点离散化，然后排序
        vector<vector<int>> points;
        for (auto interval : intervals) {
            int start = interval[0];
            int end = interval[1];
            points.push_back({ start, 1 }); // 开始一场会议，所以是+1
            points.push_back({ end, -1 }); // 结束一场会议，所以是-1
        }

        // 排序
        sort(points.begin(), points.end(), [&](vector<int> &A, vector<int> &B) {
            if (A[0] != B[0]) return A[0] < B[0]; // 按时间结点在“数轴”上的先后顺序
            return A[1] < B[1]; // 特殊情况：如果两个时间结点相同，那么先结束会议A，再开始会议B，这样也能同时参与
        });

        // 一次遍历
        int delta = 0; // 表示当前有多少场会议同时进行
        for (auto point : points) {
            delta += point[1];
            if (delta > 1) { // 只要有超过1场会议在同时进行，那么就无法参加完
                return false;
            }
        }
        return true;
    }
};