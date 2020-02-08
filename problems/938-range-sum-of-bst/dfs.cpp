/**
 * DFS(纯遍历)
 * 
 * 时间：`O(N)`, 148ms
 * 空间：`O(H)`, 41MB
 */

class Solution {
public:
    int rangeSumBST(TreeNode* root, int L, int R) {
        dfs(root, L, R);
        return res;
    }

    void dfs(TreeNode* node, int L, int R) {
        if (!node) return;

        if (node->val >= L && node->val <= R) {
            res += node->val;
        }
        dfs(node->left, L, R);
        dfs(node->right, L, R);
    }

private:
    int res = 0;
};