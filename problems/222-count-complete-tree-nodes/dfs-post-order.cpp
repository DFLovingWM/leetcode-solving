/**
 * DFS
 * 
 * 时间：`O(N)`, 36ms
 */

class Solution {
public:
    int countNodes(TreeNode* root) {
        if (!root) return 0;
        return 1 + countNodes(root->left) + countNodes(root->right);
    }
};