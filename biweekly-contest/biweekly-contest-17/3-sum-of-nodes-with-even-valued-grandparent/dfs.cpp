/**
 * DFS：将parent关系反映在参数中，代替map
 * 
 * 时间：`O(N)`, 40ms
 */

class Solution {
public:
    int sumEvenGrandparent(TreeNode* root) {
        res = 0;
        dfs(root, NULL, NULL);
        return res;
    }

    void dfs(TreeNode* me, TreeNode* p, TreeNode *gp) {
        if (!me) return;

        if (gp != NULL && gp->val % 2 == 0) {
            res += me->val;
        }
        dfs(me->left, me, p);
        dfs(me->right, me, p);
    }

private:
    int res;
};