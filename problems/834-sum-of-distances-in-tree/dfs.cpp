/**
 * 后序遍历求root + 前序遍历推导关系
 * 
 * 时间：`O(N)`, 100ms
 */

#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<int> sumOfDistancesInTree(int n, vector<vector<int>>& edges) {
        N = n;
        adj.resize(N);
        count = vector<int>(N, 1);
        ans = vector<int>(N, 0);

        // 构造邻接表
        for (auto edge : edges) {
            int a = edge[0], b = edge[1];
            adj[a].push_back(b);
            adj[b].push_back(a);
        }

        dfs(0, -1);
        dfs2(0, -1);

        return ans;
    }

    // 后序遍历：求出每个结点的子树结点数，以及root的答案
    void dfs(int me, int parent) {
        for (int child : adj[me]) {
            if (child != parent) { // 模拟二叉树往下遍历，不要回头
                dfs(child, me);
                // 累积结点数
                count[me] += count[child];
                // 计算距离
                ans[me] += count[child] + ans[child]; // 关键
            }
        }
    }

    // 前序遍历：求出每个结点对应的答案
    void dfs2(int me, int parent) {
        for (int child : adj[me]) {
            if (child != parent) {
                ans[child] = ans[me] + (N - count[child]) - count[child]; // 父推导子
                dfs2(child, me);
            }
        }
    }

private:
    int N;
    vector<vector<int>> adj; // 邻接表
    vector<int> count; // 子树结点数
    vector<int> ans; // 答案
};