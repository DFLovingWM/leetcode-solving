/**
 * 模板题：实现`BST.has`操作，使用二分查找
 * 
 * 时间：`O(H)`, 52ms
 */

class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (!root) return NULL;

        if (root->val == val) return root;
        return searchBST((root->val < val ? root->right : root->left), val); // 二分
    }
};