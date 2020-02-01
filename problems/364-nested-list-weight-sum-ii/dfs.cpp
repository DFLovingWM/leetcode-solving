/**
 * 两次DFS
 * 
 * 时间：`O(N)`, 4ms
 */

class Solution {
public:
    int depthSumInverse(vector<NestedInteger>& nestedList) {
        int rootDepth = 0;
        for (auto &obj : nestedList) {
            rootDepth = max(rootDepth, getDepth(obj) + 1);
        }

        int res = 0;
        for (auto &obj : nestedList) {
            res += calc(obj, rootDepth - 1);
        }
        return res;
    }

    int getDepth(NestedInteger &curr) {
        if (curr.isInteger()) return 1;

        int res = 0;
        for (auto &next : curr.getList()) {
            res = max(res, getDepth(next) + 1);
        }
        return res;
    }

    int calc(NestedInteger &curr, int depth) {
        // 叶子结点
        if (curr.isInteger()) return depth * curr.getInteger();

        int res = 0;
        for (auto &next : curr.getList()) {
            res += calc(next, depth - 1);
        }
        return res;
    }
};