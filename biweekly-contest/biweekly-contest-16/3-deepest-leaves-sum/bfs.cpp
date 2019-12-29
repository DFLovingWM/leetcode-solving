class Solution {
public:
    int deepestLeavesSum(TreeNode* root) {
        vector<TreeNode*> currs;
        currs.push_back(root);
        int res = 0;

        while (true) {
            vector<TreeNode*> nexts;
            int sum = 0;
            for (auto curr : currs) {
                sum += curr->val;
                if (curr->left) {
                    nexts.push_back(curr->left);
                }
                if (curr->right) {
                    nexts.push_back(curr->right);
                }
            }
            res = sum;
            if (nexts.empty()) break;
            currs = nexts;
        }
        
        return res;
    }
};