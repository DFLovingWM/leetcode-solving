/**
 * BFS + LCA
 * 
 * 时间：`O(N)`, 8ms
 */

class Solution {
public:
    TreeNode* subtreeWithAllDeepest(TreeNode* root) {
        // BFS，定位到最后一层
        // 同时记录结点的父结点
        unordered_map<TreeNode*, TreeNode*> getParent;
        vector<TreeNode*> currs = {root};
        while (true) {
            vector<TreeNode*> nexts;
            for (auto curr : currs) {
                if (curr->left) {
                    nexts.push_back(curr->left);
                    getParent.insert(make_pair(curr->left, curr));
                }
                if (curr->right) {
                    nexts.push_back(curr->right);
                    getParent.insert(make_pair(curr->right, curr));
                }
            }
            if (nexts.size() == 0) break;
            currs = nexts;
        }

        // 找LCA
        unordered_set<TreeNode*> children(currs.begin(), currs.end());
        while (children.size() > 1) {
            unordered_set<TreeNode*> parents;
            for (auto child : children) {
                parents.insert(getParent[child]);
            }
            children = parents;
        }
        return *children.begin();
    }
};