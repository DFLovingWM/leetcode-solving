#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>> matrix) {
        const int R = matrix.size(), C = matrix[0].size();
        vector<pair<int, int>> currs;
        unordered_set<int> visit;
        
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (matrix[i][j] == 0) {
                    currs.push_back(make_pair(i, j));
                    visit.insert(i * C + j);
                }
            }
        }

        for (int level = 1; currs.size() > 0; ++level) {
            vector<pair<int, int>> nexts;
            for (auto curr : currs) {
                for (auto dir : DIRS) {
                    int nx = curr.first + dir[0];
                    int ny = curr.second + dir[1];
                    const int key = nx * C + ny;
                    if (nx >= 0 && nx < R && ny >= 0 && ny < C && !visit.count(key)) {
                        visit.insert(key);
                        matrix[nx][ny] = level;
                        nexts.push_back(make_pair(nx, ny));
                    }
                }
            }
            currs = nexts;
        }

        return matrix;
    }
private:
    vector<vector<int>> DIRS = {{-1,0}, {0,-1}, {1,0}, {0,1}};
};