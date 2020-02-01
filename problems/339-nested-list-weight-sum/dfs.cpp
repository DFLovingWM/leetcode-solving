/**
 * DFS
 * 
 * 时间：`O(N)`, 8ms
 */

class Solution {
public:
    int depthSum(vector<NestedInteger>& nestedList) {
        int res = 0;
        for (auto &obj : nestedList) {
            res += dfs(obj, 1);
        }
        return res;
    }

    int dfs(NestedInteger &curr, int depth) {
        // 叶子结点
        if (curr.isInteger()) return depth * curr.getInteger();

        int res = 0;
        for (auto &next : curr.getList()) {
            res += dfs(next, depth + 1);
        }
        return res;
    }
};