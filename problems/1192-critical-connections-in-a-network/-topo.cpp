/**
 * 拓扑排序：查找不在环中的边
 */

class Solution {
public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
        vector<int> adj[n]; // 邻接表
        vector<int> deg(n, 0); // 度
        for (auto conn : connections) {
            int x = conn[0], y = conn[1];
            adj[x].push_back(y);
            adj[y].push_back(x);
            ++deg[x];
            ++deg[y];
        }

        queue<int> Q;
        for (int i = 0; i < n; ++i) {
            if (deg[i] == 1) {
                Q.push(i);
            }
        }

        vector<vector<int>> res;
        while (!Q.empty()) {
            int i = Q.front(); Q.pop();
            for (int j : adj[i]) {
                res.push_back({i, j});
                --deg[j];
                if (deg[j] == 1) {
                    Q.push(j);
                }
            }
        }

        return res;
    }
};