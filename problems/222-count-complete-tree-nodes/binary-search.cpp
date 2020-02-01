/**
 * 二分
 * 
 * 时间：`O(logN * logN)`, 28ms
 */

class Solution {
public:
    int countNodes(TreeNode* root) {
        if (!root) return 0;

        int left = getLevel(root->left);
        int right = getLevel(root->right);
        if (left == right) { // 右子树可能不满
            return (1 << left) + countNodes(root->right);
        } else { // 左子树可能不满
            return (1 << right) + countNodes(root->left);
        }
    }

    int getLevel(TreeNode* node) {
        int res = 0;
        while (node) {
            ++res;
            node = node->left;
        }
        return res;
    }
};