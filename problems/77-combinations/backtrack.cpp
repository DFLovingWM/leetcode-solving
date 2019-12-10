#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> res;
        vector<int> acc;
        backtrack(1, n, k, res, acc);
        return res;
    }

    void backtrack(int start, const int &n, const int &k, vector<vector<int>> &res, vector<int> &acc) {
        const int restK = k - acc.size(); // 还要选多少个数

        if (restK == 0) {
            res.push_back(acc); // 注：这里存在copy过程
            return;
        }

        for (int i = start; i + restK - 1 <= n; ++i) { // 循环条件存在剪枝
            acc.push_back(i);
            backtrack(i + 1, n, k, res, acc);
            acc.pop_back();
        }
    }
};