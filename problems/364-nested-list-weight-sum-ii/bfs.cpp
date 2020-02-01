/**
 * BFS
 * 
 * 时间：`O(N)`, 0ms
 */

class Solution {
public:
    int depthSumInverse(vector<NestedInteger>& nestedList) {
        vector<vector<int>> all; // 保存所有层的叶子结点值
        vector<NestedInteger> currs(nestedList);
        vector<int> currVals;
        
        while (currs.size() > 0) {
            vector<NestedInteger> nexts;
            vector<int> nextVals;

            for (auto &curr : currs) {
                if (curr.isInteger()) {
                    nextVals.push_back(curr.getInteger());
                } else {
                    for (auto &next : curr.getList()) {
                        nexts.push_back(next);
                    }
                }
            }

            all.push_back(nextVals);
            currs = nexts;
        }
    


        int res = 0;
        int depth = all.size();
        for (auto &level : all) {
            for (auto val : level) {
                res += depth * val;
            }
            --depth;
        }
        return res;
    }
};