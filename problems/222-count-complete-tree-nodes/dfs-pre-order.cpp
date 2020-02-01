/**
 * DFS
 * 
 * 时间：`O(N)`, 44ms
 */

class Solution {
public:
    int countNodes(TreeNode* root) {
        res = 0;
        dfs(root);
        return res;
    }

    void dfs(TreeNode* node) {
        if (!node) return;

        ++res;
        dfs(node->left);
        dfs(node->right);
    }

private:
    int res;
};