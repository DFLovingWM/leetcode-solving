import java.util.TreeMap;

public class Solution {
    public int minMeetingRooms(int[][] intervals) {
        TreeMap<Integer, Integer> delta = new TreeMap<>();
        for (int[] interval : intervals) {
            int from = interval[0];
            int to = interval[1];
            delta.put(from, delta.getOrDefault(from, 0) + 1);
            delta.put(to, delta.getOrDefault(to, 0) - 1);
        }
        
        int res = 0;
        int acc = 0;
        for (Integer d : delta.values()) {
            acc += d;
            res = Math.max(res, acc);
        }
        return res;
    }
}