/**
 * BFS + 状态(位)压缩
 * 记录最小距离
 * 
 * 时间：`O(N * 2^N)`, 12ms
 */

#include <vector>
#include <queue>
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
        queue<State> Q;
        vector<vector<int>> dist(1 << N, vector<int>(N, INT_MAX)); // 标记是否已遍历

        // 从所有点（同时）出发BFS
        for (int i = 0; i < N; ++i) {
            Q.push(State(1 << i, i));
            dist[1 << i][i] = 0;
        }

        // 层次遍历
        while (!Q.empty()) {
            State curr = Q.front(); Q.pop();
            for (int j : adj[curr.i]) {
                int newCover = curr.cover | (1 << j);
                int newDist = dist[curr.cover][curr.i] + 1;
                if (newCover == END) return newDist; // 终点
                if (newDist < dist[newCover][j]) { // 如果距离更小，就更新(收敛)
                    dist[newCover][j] = newDist;
                    Q.push(State(newCover, j));
                }
            }
        }

        return 0;
    }
};