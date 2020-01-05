/**
 * 1、进行层次遍历（BFS）
 * 2、排序
 */

#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<string> watchedVideosByFriends(vector<vector<string>>& watchedVideos, vector<vector<int>>& friends, int id, int level) {
        // BFS
        unordered_set<int> visit;
        vector<int> currs;
        currs.push_back(id);
        visit.insert(id);
        for (int l = 0; l < level && currs.size() > 0; ++l) {
            vector<int> nexts;
            for (int i : currs) {
                for (int j : friends[i]) {
                    if (!visit.count(j)) {
                        visit.insert(j);
                        nexts.push_back(j);
                    }
                }
            }
            currs = nexts;
        }

        // 找到对应的video、并排序
        unordered_map<string, int> videoFreq;
        for (int i : currs) {
            for (string &v : watchedVideos[i]) {
                ++videoFreq[v];
            }
        }
        vector<string> res;
        for (auto p : videoFreq) {
            res.push_back(p.first);
        }
        sort(res.begin(), res.end(), [&](const string &v1, const string &v2) {
            if (videoFreq[v1] != videoFreq[v2]) return videoFreq[v1] < videoFreq[v2];
            return v1 < v2;
        });

        return res;
    }
};