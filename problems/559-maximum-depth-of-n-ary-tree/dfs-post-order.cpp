/**
 * DFS（后序遍历）
 * 
 * 时间：`O(N)`, 80ms
 */

class Solution {
public:
    int maxDepth(Node* node) {
        if (!node) return 0;

        int res = 0;
        for (auto child : node->children) {
            res = max(res, maxDepth(child)); // 选最大层数分支
        }
        return res + 1; // 加上本结点一层
    }
};