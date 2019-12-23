/**
 * 位操作（找规律）：从大到小、位数为k的二进制表示
 * 
 * 参考：https://leetcode-cn.com/problems/iterator-for-combination/solution/er-jin-zhi-bian-ma-bu-yong-qiu-chu-quan-pai-lie-by/
 */

#include <string>
#include <vector>
using namespace std;

class CombinationIterator {
public:
    CombinationIterator(string characters, int combinationLength) {
        chars = characters;
        k = combinationLength;
        curr = (1 << chars.size()) - 1; // 初始化为最大、即全1的二进制数
        done = false;
    }
    
    string next() {
        while (countOne() != k) --curr;
        if (curr == (1 << k) - 1) { // 如果当前curr是最小的k个1，就标志着结束了
            done = true;
        }
        string res = toStr();
        --curr;
        return res;
    }
    
    bool hasNext() {
        return !done;
    }

private:
    int curr; // 二进制表示
    string chars;
    int k;
    bool done; // 表示是否结束

    // 数curr中的1的个数
    int countOne () {
        int n = curr;
        int res = 0;
        while (n) {
            n = n & (n - 1); // 消除最右的1
            ++res;
        }
        return res;
    }

    // 二进制 => 字符串
    string toStr () {
        int n = curr;
        string res;
        for (int i = chars.size() - 1; i >= 0 && n; --i) {
            if (n & 1) res = chars[i] + res;
            n >>= 1;
        }
        return res;
    }
};