/**
 * DFS：构造parent关系（映射：子=>父）
 */

class Solution {
public:
    int sumEvenGrandparent(TreeNode* root) {
        dfs(root);
        int res = 0;
        for (auto p : parent) {
            auto child = p.first;
            auto par = p.second;
            if (parent.count(par) && parent[par]->val % 2 == 0) {
                res += child->val;
            }
        }
        return res;
    }

    void dfs(TreeNode* node) {
        if (!node) return;

        if (node->left) {
            parent[node->left] = node;
            dfs(node->left);
        }
        if (node->right) {
            parent[node->right] = node;
            dfs(node->right);
        }
    }

private:
    unordered_map<TreeNode*, TreeNode*> parent;
};