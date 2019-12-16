#include <string>
#include <vector>
using namespace std;

class CombinationIterator {
public:
    CombinationIterator(string characters, int combinationLength) {
        chars = characters;
        k = combinationLength;
    }
    
    string next() {
        if (curr.empty()) { // 第一次
            for (int i = 0; i < k; ++i) {
                curr.push_back(i);
            }
        } else { // 一般情况
            int n = chars.size();

            // 逆序寻找第一个不相同字符`i`，前进一位
            // 其后字符重置为`i`后连续几位
            int i = k - 1, j = n - 1;
            while (j == curr[i]) {
                --j;
                --i;
            }

            j = curr[i] + 1;
            for (; i < k; ++i) {
                curr[i] = j++;
            }
        }
        return getStr();
    }
    
    bool hasNext() {
        return curr.size() == 0 || curr[0] + k != chars.size();
    }

private:
    string chars;
    vector<int> curr; // 当前字符串（保存k个下标）
    int k;

    // 下标数组 => 字符串
    string getStr () {
        string res;
        for (int i : curr) {
            res.push_back(chars[i]);
        }
        return res;
    }
};