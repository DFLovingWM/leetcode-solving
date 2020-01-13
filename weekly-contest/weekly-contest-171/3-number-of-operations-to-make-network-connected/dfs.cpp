/**
 * DFS：160ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    int makeConnected(int n, vector<vector<int>>& connections) {
        if (connections.size() < n - 1) return -1;

        int res = 0;
        vector<int> visited(n, 0);
        vector<vector<int>> adj;
        adj.resize(n);

        // 处理邻接表
        for (auto conn : connections) {
            int a = conn[0];
            int b = conn[1];
            adj[a].push_back(b);
            adj[b].push_back(a);
        }

        for (int i = 0; i < n; ++i) {
            if (!visited[i]) {
                visited[i] = 1;
                dfs(i, visited, adj);
                ++res;
            }
        }

        return res - 1;
    }

    void dfs(int i, vector<int>& visited, vector<vector<int>> &adj) {
        for (int j : adj[i]) {
            if (!visited[j]) {
                visited[j] = 1;
                dfs(j, visited, adj);
            }
        }
    }
};