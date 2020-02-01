/**
 * 去环
 * 
 * 时间：ms
 */

#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;

class Solution {
public:
    int kSimilarity(string A, string B) {
        graph = vector<vector<int>>(n, vector<int>(n, 0)); // `graph[a][b] = n`表示a有n条边通往b

        int diff = 0;
        for (int i = 0; i < A.size(); ++i) {
            if (A[i] != B[i]) {
                ++diff;
                ++graph[A[i] - 'a'][B[i] - 'a'];
            }
        }
        
        int res = 0;
        while (diff) {
            vector<int> cycle = getCycle();
            res += cycle.size() - 2;
            for (int i = 1; i < cycle.size(); ++i) {
                --graph[cycle[i - 1]][cycle[i]];
                --diff;
            }
        }
        return res;
    }

    vector<int> getCycle() {
        bool found = false;
        int i;
        for (i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (graph[i][j]) {
                    found = true;
                    break;
                }
            }
            if (found) break;
        }

        vector<int> path = {i};
        unordered_set<int> exist = {i};
        dfs(i, path, exist);

        // 将环的部分取出来
        int tail = path[path.size() - 1];
        for (i = 0; i < path.size(); ++i) {
            if (path[i] == tail) break;
        }
        vector<int> res;
        for (; i < path.size(); ++i) {
            res.push_back(path[i]);
        }
        return res;
    }

    bool dfs(int i, vector<int> &path, unordered_set<int> &exist) {
        for (int j = 0; j < n; ++j) {
            if (graph[i][j]) {
                // 探索
                path.push_back(j);
                if (exist.count(j)) return true; // 检测到环，终止搜索
                exist.insert(j);
                if (dfs(j, path, exist)) return true;
                // 回溯
                path.pop_back();
                exist.erase(j);
            }
        }
        return false;
    }

private:
    const int n = 6;
    vector<vector<int>> graph;
};

int main() {
    string A("cdebcdeadedaaaebfbcf"), B("baaddacfedebefdabecc");
    cout << Solution().kSimilarity(A, B) << endl;
    return 0;
}