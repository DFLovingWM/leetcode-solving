import java.util.TreeMap;

public class MyCalendarTwo {

    TreeMap<Integer, Integer> delta;

    public MyCalendarTwo() {
        this.delta = new TreeMap<>();
    }

    public boolean book(int start, int end) {
        // 先加进去
        this.delta.put(start, this.delta.getOrDefault(start, 0) + 1);
        this.delta.put(end, this.delta.getOrDefault(end, 0) - 1);

        int overlayCount = 0; // 累计
        for (int d : delta.values()) { // 从左到右遍历
            overlayCount += d;
            if (overlayCount >= 3) { // 超过3层，不合法
                // 恢复（除去该区间）
                this.delta.put(start, this.delta.get(start) - 1);
                this.delta.put(end, this.delta.get(end) + 1);
                if (this.delta.get(start) == 0) this.delta.remove(start);
                return false;
            }
        }
        return true;
    }
}
