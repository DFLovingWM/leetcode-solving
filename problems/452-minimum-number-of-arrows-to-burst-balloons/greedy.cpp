#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        const int n = points.size();
        if (n == 0) return 0;

        // 排序：end小的优先
        sort(points.begin(), points.end(), [&](vector<int> &A, vector<int> &B) {
            return A[1] < B[1];
        });
        
        int arrow = 1;
        int end = points[0][1];
        for (int i = 1; i < n; ++i) {
            if (points[i][0] > end) { // 不相交(这里相等也算相交)，才需要增加箭
                ++arrow;
                end = points[i][1];
            }
        }
        return arrow;
    }
};