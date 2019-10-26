import java.util.TreeMap;

public class MyCalendarThree {
    TreeMap<Integer, Integer> delta;

    public MyCalendarThree() {
        delta = new TreeMap<>();
    }

    public int book(int start, int end) {
        delta.put(start, delta.getOrDefault(start, 0) + 1);
        delta.put(end, delta.getOrDefault(end, 0) - 1);

        int max = 0;
        int acc = 0;
        for (int d : delta.values()) {
            acc += d;
            max = Math.max(max, acc);
        }
        return max;
    }
}
