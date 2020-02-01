/**
 * 多源最短路径，用Floyd
 * 
 * 时间：`O(N^3)`, 52ms
 */

class Solution {
public:
    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {
        vector<vector<int>> dist(n, vector<int>(n, INT_MAX));
        for (auto &edge : edges) {
            int x = edge[0], y = edge[1], weight = edge[2];
            dist[x][y] = dist[y][x] = weight;
        }
        for (int k = 0; k < n; ++k) {
            for (int i = 0; i < n; ++i) {
                for (int j = 0; j < n; ++j) {
                    if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX) {
                        dist[i][j] = min(dist[i][k] + dist[k][j], dist[i][j]);
                    }
                }
            }
        }

        int minIndex = -1, minCount = n;
        for (int i = 0; i < n; ++i) {
            int cnt = 0;
            for (int j = 0; j < n; ++j) {
                if (j != i && dist[i][j] <= distanceThreshold) {
                    ++cnt;
                }
            }
            if (cnt <= minCount) {
                minIndex = i;
                minCount = cnt;
            }
        }

        return minIndex;
    }
};