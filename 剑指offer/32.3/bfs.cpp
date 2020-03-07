/**
 * BFS + 栈
 */

class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> res;
        if (!root) return res;

        queue<TreeNode*> currs;
        currs.push(root);

        for (int i = 0; !currs.empty(); ++i) {
            vector<int> level;
            queue<TreeNode*> nexts;

            while (!currs.empty()) {
                auto node = currs.front(); currs.pop();
                level.push_back(node->val);
                if (node->left) {
                    nexts.push(node->left);
                }
                if (node->right) {
                    nexts.push(node->right);
                }
            }

            if (i % 2 == 1) reverse(level.begin(), level.end());
            res.push_back(level);
            currs = nexts;
        }

        return res;
    }
};