/**
 * 有序表 + 二分查找
 * 
 * 时间：140ms
 * 空间：43.1MB
 */

class TweetCounts {
public:
    TweetCounts() {
        user2Timeline.clear();
    }
    
    // O(logN)
    void recordTweet(string tweetName, int time) {
        user2Timeline[tweetName].insert(time);
    }
    
    // 二分查找
    vector<int> getTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime) {
        if (!user2Timeline.count(tweetName)) return {};

        set<int> &timeline = user2Timeline[tweetName];
        vector<int> res;
        int delta;
        if (freq == "minute") {
            delta = 60;
        } else if (freq == "hour") {
            delta = 60 * 60;
        } else if (freq == "day") {
            delta = 60 * 60 * 24;
        }
        ++endTime;
        for (int i = startTime; i < endTime; i += delta) {
            int s = i;
            int e = min(i + delta, endTime);
            auto left = timeline.lower_bound(s); // >= s
            auto right = timeline.lower_bound(e); // < e，这里求出的right是开区间
            int r = distance(left, right); // `[s, e)`区间内的实际个数
            res.push_back(r);
        }
        return res;
    }

private:
    unordered_map<string, set<int>> user2Timeline;
};