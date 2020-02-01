/**
 * 后序遍历
 * 
 * 时间：`O(N)`, 16ms
 */

class Solution {
public:
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& toDeletes) {
        delSet.insert(toDeletes.begin(), toDeletes.end()); // 哈希
        root = dfs(root);
        if (root) res.push_back(root);
        return res;
    }

    TreeNode* dfs(TreeNode* node) {
        if (!node) return node;

        node->left = dfs(node->left);
        node->right = dfs(node->right);
        
        if (delSet.count(node->val)) { // 本结点需要被删除
            if (node->left) res.push_back(node->left); // 分割左子树
            if (node->right) res.push_back(node->right); // 分割右子树
            return NULL; // 删除本结点
        } else {
            return node;
        }
    }

private:
    vector<TreeNode*> res;
    unordered_set<int> delSet;
};