/**
 * BFS
 * 
 * 时间：最坏`O(20!)`, 164ms
 */

#include <string>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;

class Solution {
public:
    int kSimilarity(string A, string B) {
        vector<string> currs = {A};
        unordered_set<string> visited = {A};
        for (int step = 0; currs.size() > 0; ++step) {
            vector<string> nexts;
            for (string curr : currs) {
                if (curr == B) return step;
                for (string neighbor : getNeighbors(curr, B)) {
                    if (visited.count(neighbor)) continue;
                    nexts.push_back(neighbor);
                    visited.insert(neighbor);
                }
            }
            currs = nexts;
        }
        return -1;
    }

    vector<string> getNeighbors(string &word, string &target) {
        vector<string> res;
        const int n = word.size();
        int i, j;
        for (i = 0; i < n; ++i) {
            if (word[i] != target[i]) { // 待纠正字符（第一个不相等字符）
                break;
            }
        }
        for (j = i + 1; j < n; ++j) {
            // 找到所有可以换到i的字符
            // 剪枝：相等的字符没必要作为j
            if (word[j] != target[j] && word[j] == target[i]) {
                swap(word[i], word[j]);
                res.push_back(word);
                swap(word[i], word[j]);
            }
        }
        return res;
    }
};