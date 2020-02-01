/**
 * 反向拓扑排序
 * 
 * 时间：`O(V + E)`, 200ms
 */

#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
        const int N = graph.size();

        // 反向图
        vector<int> adj[N]; // 邻接表
        vector<int> inDegree(N, 0);
        for (int i = 0; i < N; ++i) {
            for (int j : graph[i]) {
                adj[j].push_back(i);
                ++inDegree[i];
            }
        }

        queue<int> Q;
        vector<bool> isSafe(N, false);
        for (int i = 0; i < N; ++i) {
            if (inDegree[i] == 0) {
                Q.push(i);
            }
        }
        while (!Q.empty()) {
            int i = Q.front(); Q.pop();
            isSafe[i] = true;
            for (int j : adj[i]) {
                --inDegree[j];
                if (inDegree[j] == 0) {
                    Q.push(j);
                }
            }
        }

        vector<int> res;
        for (int i = 0; i < N; ++i) {
            if (isSafe[i]) {
                res.push_back(i);
            }
        }
        return res;
    }
};