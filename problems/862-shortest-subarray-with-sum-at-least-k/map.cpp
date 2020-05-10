/**
 * C++ map实现
 * 
 * 时间：`O(NlogN)`, 984ms
 * 参考：https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/solution/javaqian-zhui-he-treemapji-jian-dai-ma-by-he-yun-f/
 */

class Solution {
public:
    int shortestSubarray(vector<int>& A, int K) {
        const int n = A.size();
        vector<int> P(n + 1, 0); // 前缀和
        for (int i = 0; i < n; ++i) {
            P[i + 1] = P[i] + A[i];
        }

        int res = INT_MAX;
        map<int, int> m;

        for (int i = 0; i <= n; ++i) {
            // 快速定位减数
            if (!m.empty()) {
                auto iter = m.upper_bound(P[i] - K);
                if (iter != m.begin()) {
                  --iter;
                  res = min(res, i - iter->second);
                }
            }

            // 作为减数，维护单调性
            while (!m.empty() && P[i] <= m.rbegin()->first) {
              m.erase(m.rbegin()->first);
            }

            m[P[i]] = i;
        }

        return res == INT_MAX ? -1 : res;
    }
};