/**
 * 贪心：取与相邻结点不冲突的最小颜色
 * 
 * 时间：180ms
 */

class Solution {
public:
    vector<int> gardenNoAdj(int N, vector<vector<int>>& paths) {
        // 构造邻接表
        vector<int> adj[N];
        for (auto path : paths) {
            int a = path[0] - 1;
            int b = path[1] - 1;
            adj[a].push_back(b);
            adj[b].push_back(a);
        }

        vector<int> res(N, -1);
        for (int i = 0; i < N; ++i) {
            unordered_set<int> forbid; // 不可用颜色
            for (int j : adj[i]) {
                if (res[j] != -1) {
                    forbid.insert(res[j]);
                }
            }

            for (int color = 1; color <= 4; ++color) { // 遍历所有颜色，找到第一个能用的颜色
                if (!forbid.count(color)) {
                    res[i] = color;
                    break;
                }
            }
        }

        return res;
    }
};