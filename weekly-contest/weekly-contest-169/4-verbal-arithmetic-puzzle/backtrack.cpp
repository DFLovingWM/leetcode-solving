/**
 * 回溯：从最低位到最高位
 * 
 * 时间：104ms
 */

#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;

const char EMPTY = ' ';

class Solution {
public:
    bool isSolvable(vector<string> &words, string r) {
        wordCount = words.size();
        result = r;

        size_t maxSize = 0; // word最大长度
        for (string &word : words) {
            maxSize = max(maxSize, word.size());
        }
        // 剪枝1：和比加数还小 => 失败
        if (result.size() < maxSize) return false;

        nonZero.insert(result[0]);
        unordered_set<char> need; // 所需字符集
        cols = vector<vector<char>>(result.size(), vector<char>(wordCount + 1, EMPTY)); // 矩阵
        vector<string> all = words;
        all.push_back(result);
        for (int i = 0; i < all.size(); ++i) {
            string &word = all[i];
            int k = 0;
            for (auto it = word.rbegin(); it != word.rend(); ++it) { // 逆向（最低位是第0列）
                cols[k++][i] = *it;
                need.insert(*it);
            }

            nonZero.insert(word[0]);
        }
        // 剪枝2：0～9无法表示 => 失败
        if (need.size() > 10) return false;

        for (int i = 0; i <= 9; ++i) restNum.insert(i);
        char2Num[EMPTY] = 0;
        return backtrack(0, 0, 0);
    }

    // 从最低位到最高位（i递增），从上到下（j递增）
    bool backtrack(int i, int j, int sum) {
        if (i == result.size()) return true;

        char ch = cols[i][j];

        if (j == wordCount) { // 如果是和
            if (char2Num.count(ch)) { // 如果已填 => 检查该位是否相等
                if (sum % 10 == char2Num[ch]) {
                    if (backtrack(i + 1, 0, sum / 10)) return true;
                } else {
                    return false;
                }
            } else { // 如果还没填 => 看所需数字是否可用
                int needNum = sum % 10;
                if (restNum.count(needNum)) {
                    restNum.erase(needNum);
                    char2Num[ch] = needNum;
                    if (backtrack(i + 1, 0, sum / 10)) return true;
                    restNum.insert(needNum);
                    char2Num.erase(ch);
                } else {
                    return false;
                }
            }
        } else { // 如果是加数
            if (char2Num.count(ch)) { // 如果已填 => 则相加
                if (backtrack(i, j + 1, sum + char2Num[ch])) return true;
            } else { // 如果还没填 => 则枚举0～9中可用的数字
                for (int n = 0; n <= 9; ++n) {
                    if (n == 0 && nonZero.count(ch)) continue; // 剪枝3：不允许前导0
                    if (!restNum.count(n)) continue;

                    // 探索：使用n
                    restNum.erase(n);
                    char2Num[ch] = n;
                    if (backtrack(i, j + 1, sum + n)) return true;

                    // 回溯：放回n
                    restNum.insert(n);
                    char2Num.erase(ch);
                }
            }
        }

        return false;
    }

private:
    int wordCount;
    string result;
    unordered_map<char, int> char2Num; // 字符 => 数字
    vector<vector<char>> cols; // 列
    unordered_set<int> restNum; // 剩余可用数字
    unordered_set<char> nonZero; // 不能为0的字符
};