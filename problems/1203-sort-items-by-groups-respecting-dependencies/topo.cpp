/**
 * 拓扑排序（二重）
 * 
 * 时间：144ms
 */

#include <iostream>
#include <vector>
#include <unordered_set>
#include <queue>
using namespace std;

class Solution {
public:
    vector<int> sortItems(int projectNum, int initialGroupNum, vector<int>& group, vector<vector<int>>& beforeItems) {
        int groupNum = initialGroupNum;
        // 给没人负责的项目分配新组
        for (int i = 0; i < projectNum; ++i) {
            if (group[i] == -1) {
                group[i] = groupNum++;
            }
        }
        vector<int> projectAdj[projectNum];
        vector<int> projectIndegree(projectNum, 0);
        unordered_set<int> groupAdj[groupNum]; // 因为推导出的组间关系可能有重复，所以用集合来去重
        vector<int> groupIndegree(groupNum, 0);

        // 同时构建关于group、project的有向图
        for (int p1 = 0; p1 < beforeItems.size(); ++p1) {
            int g1 = group[p1]; // 项目 => 组
            for (auto &p0 : beforeItems[p1]) {
                int g0 = group[p0]; // 项目 => 组
                if (g0 == g1) { // 同一组 => p0与p1有先后项目关系
                    projectAdj[p0].push_back(p1);
                    ++projectIndegree[p1];
                } else { // 不同组 => g0与g1有先后组关系
                    // 需要判断是否重复
                    if (!groupAdj[g0].count(g1)) {
                        groupAdj[g0].insert(g1);
                        ++groupIndegree[g1];
                    }
                }
            }
        }

        // 对group进行拓扑排序
        vector<int> groupOrder;
        queue<int> Q;
        for (int i = 0; i < groupNum; ++i) {
            if (groupIndegree[i] == 0) {
                Q.push(i);
            }
        }
        int cnt = 0;
        while (!Q.empty()) {
            int i = Q.front(); Q.pop();
            groupOrder.push_back(i);
            ++cnt;
            for (int j : groupAdj[i]) {
                --groupIndegree[j];
                if (groupIndegree[j] == 0) {
                    Q.push(j);
                }
            }
        }
        if (cnt != groupNum) return {}; // 组间关系矛盾（有环）


        // 构造“组 => 项目列表”映射，以快速访问
        vector<vector<int>> group2Projects(groupNum);
        for (int i = 0; i < projectNum; ++i) {
            group2Projects[group[i]].push_back(i);
        }

        // 对排序后的每个group中的project进行拓扑排序
        for (int g : groupOrder) {
            if (!topoSortProjects(g, group2Projects, projectAdj, projectIndegree)) return {};
        }

        return res;
    }

    // 对组内的项目进行拓扑排序
    // 返回false表示有环
    bool topoSortProjects(int g, vector<vector<int>> &group2Projects, vector<int> *projectAdj, vector<int> &projectIndegree) {
        queue<int> Q;
        for (int p : group2Projects[g]) {
            if (projectIndegree[p] == 0) {
                Q.push(p);
            }
        }
        int cnt = 0;
        while (!Q.empty()) {
            int i = Q.front(); Q.pop();
            res.push_back(i); // 加入答案
            ++cnt;
            for (int j : projectAdj[i]) { // 注意：上面逻辑保证了只有组内的项目之间才有先后关系，所以项目`j`一定也属于组`g`
                --projectIndegree[j];
                if (projectIndegree[j] == 0) {
                    Q.push(j);
                }
            }
        }
        return cnt == group2Projects[g].size();
    }

private:
    vector<int> res;
};