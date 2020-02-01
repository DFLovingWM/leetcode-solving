/**
 * 后序遍历
 * 
 * 时间：`O(N)`, 4ms
 */

class Solution {
public:
    vector<vector<int>> findLeaves(TreeNode* root) {
        dfs(root);
        return res;
    }

    int dfs(TreeNode* node) {
        if (!node) return -1;

        // 左
        int left = dfs(node->left);
        // 右
        int right = dfs(node->right);
        // 本结点
        int curr = max(left, right) + 1;
        if (curr >= res.size()) res.push_back({});
        res[curr].push_back(node->val);
        return curr;
    }

private:
    vector<vector<int>> res;
};