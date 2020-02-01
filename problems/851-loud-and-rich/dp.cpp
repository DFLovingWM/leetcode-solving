/**
 * DP（Top-down）
 * 
 * 时间：`O(N)`, 132ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    vector<int> loudAndRich(vector<vector<int>>& richers, vector<int>& _quiets) {
        // 初始化变量
        quiets = _quiets;
        const int n = quiets.size();
        adj.resize(n);
        ans.assign(n, -1);
        // 构建邻接表
        for (auto richer : richers) {
            int x = richer[0];
            int y = richer[1];
            // x比y有钱，则y可以通往x
            adj[y].push_back(x);
        }
        // 确保每个人都求一次
        for (int i = 0; i < n; ++i) {
            dfs(i);
        }
        return ans;
    }

    int dfs(int i) {
        if (ans[i] != -1) return ans[i]; // 已经求过的，直接取缓存（剪枝）

        int res = i; // i对应的答案，初始化为i本人
        for (int j : adj[i]) { // 遍历所有比i有钱的人
            int k = dfs(j);
            if (quiets[k] < quiets[res]) {
                res = k;
            }
        }
        return ans[i] = res;
    }

private:
    vector<int> quiets;
    vector<int> ans;
    vector<vector<int>> adj;
};