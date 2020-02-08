/**
 * 数学：贪心 + 分解子问题
 * 
 * 时间：`O(N)`, 0ms
 */

class Solution {
public:
    vector<int> diStringMatch(string S) {
        vector<int> res;
        int L = 0, R = S.size(); // 双指针，[L, R]表示可用数字的范围
        for (char ch : S) {
            if (ch == 'I') { // 升，取最小数字
                res.push_back(L++);
            } else { // 降，则取最大数字
                res.push_back(R--);
            }
        }
        res.push_back(L); // 最后一个元素
        return res;
    }
};