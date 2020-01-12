/**
 * BFS + 状态(位)压缩
 * 记录是否已遍历
 * 
 * 时间：`O(N * 2^N)`, 20ms
 */

#include <vector>
using namespace std;

// 状态
struct State {
    int cover;
    int i;
    State(int _cover, int _i) : cover(_cover), i(_i) {}
};

class Solution {
public:
    int shortestPathLength(vector<vector<int>>& adj) {
        const int N = adj.size();
        const int END = (1 << N) - 1;
        vector<State> currs;
        vector<vector<bool>> visit(1 << N, vector<bool>(N, false)); // 标记是否已遍历

        // 从所有点（同时）出发BFS
        for (int i = 0; i < N; ++i) {
            currs.push_back(State(1 << i, i));
        }

        // 层次遍历
        for (int level = 0; !currs.empty(); ++level) {
            vector<State> nexts;
            for (auto curr : currs) {
                for (int j : adj[curr.i]) {
                    int newCover = curr.cover | (1 << j);
                    if (newCover == END) return level + 1; // 终点
                    if (!visit[newCover][j]) {
                        visit[newCover][j] = true;
                        nexts.push_back(State(newCover, j));
                    }
                }
            }
            currs = nexts;
        }
        return 0;
    }
};