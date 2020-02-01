/**
 * DFS：二分，答案在更大深度的一侧
 * 
 * 时间：`O(N)`, 4ms
 */

class Solution {
public:
    TreeNode* subtreeWithAllDeepest(TreeNode* root) {
        // 提前求所有结点的深度，用哈希表记录
        getDepth(root);
        // 二分查找目标结点
        return binarySearch(root);
    }

    TreeNode* binarySearch(TreeNode* node) {
        if (!node) return node;

        int leftDepth = node2Depth[node->left];
        int rightDepth = node2Depth[node->right];
        // 二分
        if (leftDepth == rightDepth) { // 左右子树等深 => 该结点就是答案
            return node;
        } else if (leftDepth > rightDepth) { // 左子树更深 => 答案在左子树
            return subtreeWithAllDeepest(node->left);
        } else { // 右子树更深 => 答案在右子树
            return subtreeWithAllDeepest(node->right);
        }
    }

    int getDepth(TreeNode* node) {
        if (!node) return 0;

        int dl = getDepth(node->left);
        int dr = getDepth(node->right);
        return node2Depth[node] = 1 + max(dl, dr);
    }

private:
    unordered_map<TreeNode*, int> node2Depth;
};