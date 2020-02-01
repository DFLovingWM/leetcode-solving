class Solution {
public:
    vector<int> loudAndRich(vector<vector<int>>& richers, vector<int>& _quiets) {
        quiets = _quiets;
        const int n = quiets.size();
        adj.resize(n);
        for (auto richer : richers) {
            int x = richer[0];
            int y = richer[1];
            // x比y有钱，则y可以通往x
            adj[y].push_back(x);
        }

        vector<int> res(n, 0);
        for (int i = 0; i < n; ++i) {
            tmp = i;
            dfs(i, -1);
            res[i] = tmp;
        }
        return res;
    }

    void dfs(int parent, int grandParent) {
        for (int child : adj[parent]) {
            if (child != grandParent) {
                if (quiets[child] < quiets[tmp]) {
                    tmp = child;
                }
                dfs(child, parent);
            }
        }
    }

private:
    vector<int> quiets;
    vector<vector<int>> adj;
    int tmp;
};