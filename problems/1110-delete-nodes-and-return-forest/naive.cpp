/**
 * 暴力
 * 
 * 时间：`O(NM)`, 28ms
 */

class Solution {
public:
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& toDeletes) {
        currNodes.push(root);

        for (auto toDelete : toDeletes) {
            deleted = false;
            while (!currNodes.empty()) {
                TreeNode* curr = currNodes.front(); currNodes.pop();
                if (!deleted) {
                    TreeNode* next = delNode(curr, toDelete);
                    if (next) nextNodes.push(next);
                } else {
                    nextNodes.push(curr);
                }
            }
            nextNodes.swap(currNodes);
        }

        vector<TreeNode*> res;
        while (!currNodes.empty()) {
            res.push_back(currNodes.front());
            currNodes.pop();
        }
        return res;
    }

    TreeNode* delNode(TreeNode* node, int target) {
        if (!node) return node;

        if (node->val == target) {
            if (node->left) nextNodes.push(node->left);
            if (node->right) nextNodes.push(node->right);
            deleted = true;
            return NULL;
        }
        
        node->left = delNode(node->left, target);
        node->right = delNode(node->right, target);
        return node;
    }

private:
    queue<TreeNode*> currNodes, nextNodes;
    bool deleted;
};