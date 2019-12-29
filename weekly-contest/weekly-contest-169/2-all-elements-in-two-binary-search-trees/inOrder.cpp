#include <vector>
using namespace std;

// struct TreeNode {
//     int val;
//     TreeNode *left;
//     TreeNode *right;
//     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
// };

class Solution {
public:
    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {
        // 中序
        vector<int> A, B;
        inOrder(root1, A);
        inOrder(root2, B);

        // 合并2个有序数组
        vector<int> res;
        int i = 0, j = 0;
        while (i < A.size() && j < B.size()) {
            if (A[i] <= B[j]) {
                res.push_back(A[i++]);
            } else {
                res.push_back(B[j++]);
            }
        }
        while (i < A.size()) res.push_back(A[i++]);
        while (j < B.size()) res.push_back(B[j++]);
        return res;
    }

    void inOrder(TreeNode* node, vector<int> &res) {
        if (!node) return;
        inOrder(node->left, res);
        res.push_back(node->val);
        inOrder(node->right, res);
    }
};