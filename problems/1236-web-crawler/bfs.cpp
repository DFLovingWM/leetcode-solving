/**
 * BFS
 * 
 * 时间：最坏`O(N)`, 96ms
 */

class Solution {
public:
    vector<string> crawl(string startUrl, HtmlParser htmlParser) {
        unordered_set<string> visit; // 记录已遍历
        vector<string> res; // 保存结果
        queue<string> Q; // 队列
        const string TARGET_HOSTNAME = getHostname(startUrl);
        
        Q.push(startUrl);
        visit.insert(startUrl);

        while (!Q.empty()) {
            string i = Q.front(); Q.pop();

            // 检查本结点
            string hostName = getHostname(i);
            if (hostName == TARGET_HOSTNAME) {
                // 加入结果集
                res.push_back(i);
                // 扩展子结点
                for (string j : htmlParser.getUrls(i)) {
                    if (!visit.count(j)) {
                        visit.insert(j);
                        Q.push(j);
                    }
                }
            }
        }

        // sort(res.begin(), res.end());
        return res;
    }

    string getHostname(string url) {
        return url.substr(7, url.find('/', 7) - 7);
    }
};