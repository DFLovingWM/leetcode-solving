/**
 * BFS
 * 
 * 时间：`O(N*26*26)`, 164ms
 */

#include <string>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

struct State {
    int left;
    int right;
    State(int l, int r) : left(l), right(r) {}
};

class Solution {
public:
    int minimumDistance(string word) {
        const int N = word.size();
        vector<vector<vector<int>>> dist(N + 1, vector<vector<int>>(26, vector<int>(26, INT_MAX))); // 标记（去重、收敛）
        vector<State> currs;

        for (int i = 0; i < 26; ++i) {
            for (int j = 0; j < 26; ++j) {
                dist[0][i][j] = 0;
                currs.push_back(State(i, j));
            }
        }

        for (int i = 1; i <= N; ++i) {
            int ch = word[i - 1] - 'A';
            vector<State> nexts;
            for (State curr : currs) {
                // 左走
                int leftDist = dist[i - 1][curr.left][curr.right] + getDist(curr.left, ch);
                if (leftDist < dist[i][ch][curr.right]) {
                    dist[i][ch][curr.right] = leftDist;
                    nexts.push_back(State(ch, curr.right));
                }

                // 右走
                int rightDist = dist[i - 1][curr.left][curr.right] + getDist(curr.right, ch);
                if (rightDist < dist[i][curr.left][ch]) {
                    dist[i][curr.left][ch] = rightDist;
                    nexts.push_back(State(curr.left, ch));
                }
            }
            currs = nexts;
        }

        int res = INT_MAX;
        for (int l = 0; l < 26; ++l) {
            for (int r = 0; r < 26; ++r) {
                res = min(res, dist[N][l][r]);
            }
        }

        return res;
    }

    int getDist(int from, int to) {
        int fx = from / 6, fy = from % 6;
        int tx = to / 6, ty = to % 6;
        return abs(fx - tx) + abs(fy - ty);
    }
};