class Solution {
public:
    string parseTernary(string S) {
        const int n = S.size();
        char curr = EMPTY;

        for (int i = 0; i < n; ++i) {
            if (curr == EMPTY) {
                curr = S[i];
                continue;
            }

            if (S[i] == '?') {
                conds.push(curr);
            } else if (S[i] == ':') {
                ops.push(curr);
            }

            if (!conds.empty() && ops.size() >= 2) {
                curr = getAndEvaluate();
            } else {
                curr = EMPTY;
            }
        }
        ops.push(curr);

        while (!conds.empty()) {
            ops.push(getAndEvaluate());
        }

        string res;
        res.push_back(ops.top());
        return res;
    }

    char getAndEvaluate() {
        char cond = conds.top();
        conds.pop();
        char b = ops.top();
        ops.pop();
        char a = ops.top();
        ops.pop();
        return cond == 'T' ? a : b;
    }

private:
    const char EMPTY = ' ';
    stack<char> conds;
    stack<char> ops;
};