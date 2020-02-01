/**
 * 重新串联
 * 
 * 时间：`O(N)`, 28ms
 */

class Solution {
public:
    TreeNode* increasingBST(TreeNode* root) {
        TreeNode* dummy = new TreeNode(-1);
        chain = dummy;
        inOrder(root);
        TreeNode* res = dummy->right;
        dummy->right = NULL;
        delete dummy;
        return res;
    }

    void inOrder(TreeNode* node) {
        if (!node) return;

        TreeNode* left = node->left;
        TreeNode* right = node->right;
        // 左
        inOrder(left);
        // 串联本结点
        node->left = node->right = NULL;
        chain->right = node;
        chain = chain->right;
        // 右
        inOrder(right);
    }

private:
    TreeNode* chain;
};