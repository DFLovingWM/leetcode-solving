/**
 * 前缀XOR：因为XOR同时表示“加”“减”
 */

#include <vector>
using namespace std;

class Solution {
public:
    vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {
        const int n = arr.size();
        vector<int> prefix = {0};
        for (int a : arr) {
            prefix.push_back(prefix.back() ^ a);
        }

        vector<int> res;
        for (auto query : queries) {
            res.push_back(prefix[query[1] + 1] ^ prefix[query[0]]);
        }
        return res;
    }
};