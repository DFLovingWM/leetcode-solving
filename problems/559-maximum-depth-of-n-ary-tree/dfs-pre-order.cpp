/**
 * DFS（前序遍历）
 * 
 * 时间：`O(N)`, 72ms
 */

class Solution {
public:
    int maxDepth(Node* root) {
        res = 0;
        dfs(root, 1);
        return res;
    }

    void dfs(Node* node, int depth) {
        if (!node) return;

        res = max(res, depth);
        for (auto child : node->children) {
            dfs(child, depth + 1);
        }
    }

private:
    int res;
};