/**
 * BFS裸题
 */

class Solution {
public:
    vector<int> levelOrder(TreeNode* root) {
        if (!root) return {};

        vector<int> res;
        queue<TreeNode*> Q;
        Q.push(root);
        while (!Q.empty()) {
            auto node = Q.front(); Q.pop();
            res.push_back(node->val);
            if (node->left) {
                Q.push(node->left);
            }
            if (node->right) {
                Q.push(node->right);
            }
        }
        return res;
    }
};