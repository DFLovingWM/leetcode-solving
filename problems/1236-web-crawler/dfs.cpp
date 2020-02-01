/**
 * DFS
 * 
 * 时间：最坏`O(N)`, 120ms
 */

class Solution {
public:
    vector<string> crawl(string startUrl, HtmlParser _htmlParser) {
        htmlParser = &_htmlParser;
        targetHostname = getHostname(startUrl);
        dfs(startUrl);
        // sort(res.begin(), res.end());
        return res;
    }

    string getHostname(string url) {
        return url.substr(7, url.find('/', 7) - 7);
    }

    void dfs(string curr) {
        visit.insert(curr);
        res.push_back(curr);

        for (string next : htmlParser->getUrls(curr)) {
            if (getHostname(next) == targetHostname && !visit.count(next)) {
                dfs(next);
            }
        }
    }

private:
    unordered_set<string> visit; // 记录已遍历
    vector<string> res; // 保存结果
    string targetHostname;
    HtmlParser* htmlParser;
};