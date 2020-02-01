/**
 * 拓扑排序（BFS）：从最富有的那层开始扩展
 * 
 * 时间：`O(N)`, 108ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    vector<int> loudAndRich(vector<vector<int>>& edges, vector<int>& quiet) {
        const int N = quiet.size();
        vector<int> adj[N]; // 邻接表
        vector<int> inDegree(N, 0); // 入度
        vector<int> ans(N, 0);
        // 将答案初始化为本人
        for (int i = 0; i < N; ++i) {
            ans[i] = i;
        }
        // 构造邻接表
        for (auto &edge : edges) {
            int richer = edge[0], poorer = edge[1];
            adj[richer].push_back(poorer);
            ++inDegree[poorer];
        }

        // BFS
        vector<int> currs;
        for (int i = 0; i < N; ++i) {
            if (inDegree[i] == 0) {
                currs.push_back(i);
            }
        }
        while (!currs.empty()) {
            vector<int> nexts; // 下一轮“最富有者”们
            for (auto richer : currs) {
                for (auto poorer : adj[richer]) {
                    // 更新poorer的答案（注意，可能多次迭代）
                    if (quiet[ans[richer]] < quiet[ans[poorer]]) {
                        ans[poorer] = ans[richer];
                    }

                    // 删除结点i
                    --inDegree[poorer];
                    if (inDegree[poorer] == 0) {
                        nexts.push_back(poorer);
                    }
                }
            }
            currs = nexts;
        }

        return ans;
    }
};