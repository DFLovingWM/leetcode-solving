/**
 * DFS(更快的版本)
 * 
 * 时间：优于`O(N)`, 140ms
 * 空间：`O(H)`, 41MB
 */

class Solution {
public:
    int rangeSumBST(TreeNode* root, int L, int R) {
        smartDfs(root, L, R);
        return res;
    }

    void smartDfs(TreeNode* node, int L, int R) {
        if (!node) return;

        int val = node->val;
        if (val >= L && val <= R) {
            res += val;
        }
        // 可能不会左右两边都走。有选择地走。
        if (val >= L) { // 如果小于L，则不需要再走左边了
            smartDfs(node->left, L, R);
        }
        if (val <= R) { // 同理如果大于R，则不需要再走右边了
            smartDfs(node->right, L, R);
        }
    }

private:
    int res = 0;
};