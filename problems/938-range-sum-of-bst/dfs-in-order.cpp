/**
 * 中序遍历
 * 
 * 时间：`O(N)`, 164ms
 * 空间：`O(N)`, 44.1MB
 */

class Solution {
public:
    int rangeSumBST(TreeNode* root, int L, int R) {
        // 中序
        inOrder(root);

        // 线性遍历
        int i = 0, res = 0;
        while (path[i] != L) ++i;
        while (path[i] != R) {
            res += path[i];
            ++i;
        }
        return res + R;
    }

    void inOrder(TreeNode* node) {
        if (!node) return;

        inOrder(node->left);
        path.push_back(node->val);
        inOrder(node->right);
    }

private:
    vector<int> path;
};