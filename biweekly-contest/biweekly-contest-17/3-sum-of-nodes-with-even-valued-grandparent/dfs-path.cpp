/**
 * DFS：记录当前路径
 */

class Solution {
public:
    int sumEvenGrandparent(TreeNode* root) {
        dfs(root);
        return res;
    }

    void dfs(TreeNode* node) {
        if (!node) return;

        // 探索
        path.push_back(node->val);
        if (path.size() >= 3 && path[path.size() - 3] % 2 == 0) {
            res += node->val;
        }
        dfs(node->left);
        dfs(node->right);

        // 回溯
        path.pop_back();
    }

private:
    int res;
    vector<int> path;
};