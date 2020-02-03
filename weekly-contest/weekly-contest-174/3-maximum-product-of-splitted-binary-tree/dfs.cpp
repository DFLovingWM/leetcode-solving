/**
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

typedef long long ll;

class Solution {
public:
    int maxProduct(TreeNode* root) {
        // 先DFS，算出树总和`sum`
        calcSum(root);
        // 再DFS，遍历每个结点，尝试断其左右边
        dfs(root);
        // 将答案取余后再返回
        return (int) (res % MOD);
    }

    void calcSum(TreeNode* node) {
        if (!node) return;

        sum += node->val;
        calcSum(node->left);
        calcSum(node->right);
    }

    int dfs(TreeNode* node) {
        if (!node) return 0;

        int left = dfs(node->left);
        int right = dfs(node->right);
        res = max(res, mul(left, sum - left)); // 断左边
        res = max(res, mul(right, sum - right)); // 断右边
        return left + right + node->val; // 返回子树和
    }

    ll mul(int A, int B) {
        return (ll) A * (ll) B;
    }

private:
    const ll MOD = 1e9 + 7;
    int sum = 0;
    ll res = 0; // 用long long类型保存乘积
};