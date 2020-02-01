/**
 * BFS
 * 
 * 时间：`O(N)`, 0ms
 */

class Solution {
public:
    int depthSum(vector<NestedInteger>& nestedList) {
        int res = 0;
        vector<NestedInteger> currs(nestedList);
        for (int depth = 1; currs.size() > 0; ++depth) {
            vector<NestedInteger> nexts;
            for (auto &curr : currs) {
                if (curr.isInteger()) {
                    res += curr.getInteger() * depth;
                } else {
                    for (auto &next : curr.getList()) {
                        nexts.push_back(next);
                    }
                }
            }
            currs = nexts;
        }
        return res;
    }
};