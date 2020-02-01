/**
 * 找到一个可行解，使用回溯算法
 * 
 * 时间：12ms
 */

class Solution {
public:
    bool pyramidTransition(string bottom, vector<string>& allowed) {
        for (auto &allow : allowed) {
            string p = allow.substr(0, 2);
            char s = allow[2];
            suffix[p].insert(s);
        }
        string curr(bottom), next;
        return backtrack(curr, next);
    }

    bool backtrack(string &curr, string &next) {
        if (curr.size() == 1) return true;

        int i = next.size();
        // 下一轮
        if (i + 1 == curr.size()) {
            string nnext = "";
            return backtrack(next, nnext);
        }
        // 一般情况
        string p = curr.substr(i, 2);
        if (!suffix.count(p)) return false;
        for (char s : suffix[p]) { // 遍历所有可选后缀
            // 探索
            next.push_back(s);
            if (backtrack(curr, next)) return true;
            // 回溯
            next.pop_back();
        }
        return false;
    }

private:
    unordered_map<string, unordered_set<char>> suffix; // 前缀(2) => 后缀(1)
};