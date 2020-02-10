class Solution {
public:
    int minJumps(vector<int>& arr) {
        const int n = arr.size();

        unordered_map<int, vector<int>> num2Index;
        for (int i = 0; i < n; ++i) {
            num2Index[arr[i]].push_back(i);
        }

        vector<int> currs = {0};
        vector<bool> visit(n, false);
        visit[0] = true;
        for (int d = 0; currs.size() > 0; ++d) {
            vector<int> nexts;
            for (int curr : currs) {
                if (curr == n - 1) return d;

                // 左
                if (curr - 1 >= 0 && !visit[curr - 1]) {
                    visit[curr - 1] = true;
                    nexts.push_back(curr - 1);
                }
                // 右
                if (curr + 1 < n && !visit[curr + 1]) {
                    visit[curr + 1] = true;
                    nexts.push_back(curr + 1);
                }
                // 跳到相同数值
                for (int j : num2Index[arr[curr]]) {
                    if (j != curr && !visit[j]) {
                        visit[j] = true;
                        nexts.push_back(j);
                    }
                }
            }
            currs = nexts;
        }
        return -1;
    }
};