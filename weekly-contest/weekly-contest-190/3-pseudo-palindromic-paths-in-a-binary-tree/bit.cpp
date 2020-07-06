class Solution {
public:
    int pseudoPalindromicPaths (TreeNode* root) {
      res = 0;
      dfs(root, 0);
      return res;
    }

    void dfs(TreeNode* node, int path) {
      path ^= 1 << node->val;
      
      if (!node->left && !node->right) {
        if (isPseudoPalindromic(path)) {
          ++res;
        }
      } else {
        if (node->left) dfs(node->left, path);
        if (node->right) dfs(node->right, path);
      }
    }

    bool isPseudoPalindromic(int x) {
      return !(x & (x - 1));
    }
private:
    int res;
};
