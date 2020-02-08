/**
 * 哈希：对B进行哈希
 * 
 * 时间：`O(N)`, 0ms
 */

class Solution {
public:
    vector<int> anagramMappings(vector<int>& A, vector<int>& B) {
        unordered_map<int, vector<int>> num2index; // 数字 => 下标数组
        for (int i = 0; i < B.size(); ++i) {
            num2index[B[i]].push_back(i);
        }

        vector<int> res;
        for (int num : A) {
            auto &ids = num2index[num];
            res.push_back(ids.back());
            ids.pop_back();
        }
        return res;
    }
};