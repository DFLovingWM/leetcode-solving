/**
 * 贪心（排序）
 * 
 * 时间：O(NM), 280ms
 * 空间：O(M), 56.5MB
 */

class Solution {
public:
    int maxEvents(vector<vector<int>>& events) {
        // 排序：先按end升序，再按start升序
        sort(events.begin(), events.end(), [&](auto &A, auto &B) {
            if (A[1] != B[1]) return A[1] < B[1];
            return A[0] < B[0];
        });

        unordered_set<int> used; // 表示已参加的时间点
        for (auto &event: events) { // 遍历每个会议
            for (int i = event[0]; i <= event[1]; ++i) { // 遍历会议的每个时间点，看能够参加哪一刻
                if (!used.count(i)) {
                    used.insert(i);
                    break;
                }
            }
        }
        return used.size();
    }
};