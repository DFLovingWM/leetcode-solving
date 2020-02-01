/**
 * DFS（后序遍历）
 */

class Solution {
public:
    int distributeCoins(TreeNode* root) {
        res = 0;
        dfs(root);
        return res;
    }

    int dfs(TreeNode* node) {
        if (!node) return 0;

        // 先加上从子结点那里得到的
        int val = node->val + dfs(node->left) + dfs(node->right);
        // 累加本结点需要的步数
        res += abs(val - 1);
        // 将多余的返回给父结点
        return val - 1;
    }

private:
    int res;
};