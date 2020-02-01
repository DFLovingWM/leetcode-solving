/**
 * Tarjan算法
 * 
 * 时间：`O(VE)`, 604ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& conns) {
        // 初始化
        id = -1;
        adj.resize(n);
        dfn.assign(n, 0);
        low.assign(n, 0);
        visited.assign(n, false);
        // 构建邻接表
        for (auto &conn : conns) {
            int x = conn[0], y = conn[1];
            adj[x].push_back(y);
            adj[y].push_back(x);
        }
        // 一次DFS足够
        dfs(0, -1);
        return res;
    }

    void dfs(int i, int prev) {
        low[i] = dfn[i] = ++id;
        visited[i] = true;
        
        for (auto j : adj[i]) {
            if (j == prev) continue;

            if (!visited[j]) {
                // 探索
                dfs(j, i);
                // 回溯：树边，更新low[i]
                low[i] = min(low[i], low[j]);

                // 割边：当(i <- j)为树边、且low[j] > dfn[i]时，表示子结点j无法通过非父子边到达i的祖先，即(i, j)为割边
                if (dfn[i] < low[j]) {
                    res.push_back({ i, j });
                }
            } else {
                // 再次走到`j`，更新`i`的根为`j`
                low[i] = min(low[i], dfn[j]);
            }
        }
    }

private:
    int id;
    vector<vector<int>> adj; // 邻接表
    vector<int> dfn; // 结点时间戳
    vector<int> low; // 结点的根
    vector<bool> visited; // 记录是否已遍历
    vector<vector<int>> res; // 关键边
};