/**
 * 已经是有序的了，所以只需要线性遍历
 */
#include <vector>
using namespace std;

class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        const int n = timeSeries.size();
        if (n == 0) return 0;

        int res = 0;
        vector<int> prev = { timeSeries[0], timeSeries[0] + duration };

        // 一次遍历，处理连续区间
        for (int i = 1; i < n; ++i) {
            vector<int> curr = { timeSeries[i], timeSeries[i] + duration };
            if (curr[0] <= prev[1]) { // 能拼接上，则扩大右边界
                prev[1] = curr[1];
            } else { // 断开，则累加并重置
                res += prev[1] - prev[0];
                prev = curr;
            }
        }

        // 别忘了最后一个
        res += prev[1] - prev[0];

        return res;
    }
};