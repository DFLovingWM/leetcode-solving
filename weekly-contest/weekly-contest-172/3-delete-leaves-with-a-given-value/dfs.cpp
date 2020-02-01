/**
 * 后序遍历 + 有返回值
 */

class Solution {
public:
    TreeNode* removeLeafNodes(TreeNode* root, int target) {
        if (!root) return root;

        root->left = removeLeafNodes(root->left, target);
        root->right = removeLeafNodes(root->right, target);
        if (!root->left && !root->right && root->val == target) { // 叶子结点，并且等于目标值 => 删除
            return NULL;
        }
        return root;
    }
};