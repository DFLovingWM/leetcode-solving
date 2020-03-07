/**
 * 贪心（使用最小堆）
 * 
 * 时间：O(NlogN), 480ms
 * 空间：O(N), 68.6MB
 */

class Solution {
public:
    int maxEvents(vector<vector<int>>& events) {
        unordered_map<int, vector<int>> start2Ends; // 哈希表：开始 => 结束
        for (auto &event : events) {
            const int start = event[0], end = event[1];
            start2Ends[start].push_back(end);
        }

        int res = 0;
        priority_queue<int, vector<int>, greater<int>> Q; // 最小堆
        for (int i = 1; i <= 1e5; ++i) { // 尝试每一个时间点（因为一个时间点，最多只能参加1个会议）
            // `i`作为start
            if (start2Ends.count(i)) {
                for (int end : start2Ends[i]) {
                    Q.push(end); // 记录end就好
                }
            }
            // 剔除不再满足的时间段
            while (!Q.empty() && Q.top() < i) {
                Q.pop();
            }
            // 如果还有剩余，就在`i`这个时间点参加`top`会议
            if (!Q.empty()) {
                Q.pop();
                ++res;
            }
        }

        return res;
    }
};