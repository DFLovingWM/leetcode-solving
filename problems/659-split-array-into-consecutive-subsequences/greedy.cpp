/**
 * 贪心
 * 
 * 时间：`O(NlogN)`, 272ms
 */

class Solution {
public:
    bool isPossible(vector<int>& nums) {
        unordered_map<int, priority_queue<int, vector<int>, greater<int>>> m; // 结尾数字 => 所有长度（最小堆，用greater函数）
        for (int n : nums) {
            if (m.count(n - 1)) { // 贪心：如果能拼接，取最短的拼接
                auto &Q = m[n - 1];
                int shortest = Q.top(); Q.pop();
                if (Q.empty()) m.erase(n - 1);
                m[n].push(shortest + 1);
            } else { // 如果不能拼接，新增即可
                m[n].push(1);
            }
        }

        // 检查每个序列的长度都至少为3
        for (auto &p : m) {
            auto &Q = p.second;
            while (!Q.empty()) {
                int n = Q.top(); Q.pop();
                if (n < 3) return false;
            }
        }
        return true;
    }
};