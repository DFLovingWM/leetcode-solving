/**
 * DFS
 * 
 * 时间：`O(N)`, 8ms
 */

class Solution {
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> A, B;
        dfs(root1, A);
        dfs(root2, B);
        return isSame(A, B);
    }

    void dfs(TreeNode* node, vector<int> &arr) {
        if (!node) return;
        if (!node->left && !node->right) {
            arr.push_back(node->val);
            return;
        }
        // 先左后右，就能保证叶子有序
        dfs(node->left, arr);
        dfs(node->right, arr);
    }

    bool isSame(vector<int> &A, vector<int> &B) {
        if (A.size() != B.size()) return false;
        for (int i = 0; i < A.size(); ++i) {
            if (A[i] != B[i]) return false;
        }
        return true;
    }
};