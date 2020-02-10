class Solution {
public:
    int minJumps(vector<int>& arr) {
        const int n = arr.size();

        // 预处理：对于连续的一段，只取头尾
        unordered_map<int, vector<int>> num2Index;
        for (int i = 0; i < n; ) {
            int j = i + 1;
            while (j < n && arr[j] == arr[i]) ++j;
            num2Index[arr[i]].push_back(i); // 头
            if (j - 1 > i) {
                num2Index[arr[i]].push_back(j - 1); // 尾
            }
            i = j;
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