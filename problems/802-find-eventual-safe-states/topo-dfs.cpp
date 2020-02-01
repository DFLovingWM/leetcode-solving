/**
 * DFS检查环
 * 
 * 时间：`O(V + E)`, 152ms
 */

#include <vector>
#include <queue>
using namespace std;

const int UNVISITED = 0; // 未遍历
const int VISITING = 1; // 遍历中（在栈中）
const int VISITED = 2; // 已遍历

class Solution {
public:
    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
        adj = graph;
        const int n = adj.size();
        state = vector<int>(n, UNVISITED);

        vector<int> res;
        for (int i = 0; i < n; ++i) {
            if (dfs(i)) {
                res.push_back(i);
            }
        }
        return res;
    }

    // DFS：从i出发，绝不会成环则返回true，存在一个环则返回false
    bool dfs(int i) {
        // 如果撞上的结点是：
        // 1、已遍历：则当前路径暂无环 => true
        // 2、遍历中：则成环 => false
        if (state[i] != UNVISITED) {
            return state[i] == VISITED;
        }

        // 标记当前结点为遍历中
        state[i] = VISITING;
        // 扩展子结点
        for (int j : adj[i]) {
            // 但凡该路径上有一个结点成环，则`i`失败
            if (!dfs(j)) return false;
        }

        // 至此没有环，则该结点无环
        state[i] = VISITED;
        return true;
    }

private:
    vector<vector<int>> adj; // 邻接表
    vector<int> state; // 每个结点的状态
};