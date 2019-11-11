import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.TreeSet;

public class ExamRoom {

    private int N;
    private TreeSet<Integer> men;

    public ExamRoom(int N) {
        this.N = N;
        this.men = new TreeSet<>();
    }

    public int seat() {
        if (this.men.size() == 0) {
            int choose = 0;
            this.men.add(choose);
            return choose;
        }

        int dist = 0;
        int res = -1;
        int prev = -1;
        for (Integer curr : men) {
            if (prev == -1) {
                prev = curr;
                continue;
            }
            int d = (curr - prev) / 2;
            if (d > dist) {
                dist = d;
                res = prev + d;
            }
            prev = curr;
        }

        // 坐开头
        int nearest = this.men.first();
        if (!this.men.contains(0) && nearest >= dist) { // 注意：这里是距离相等也可以，因为0优先
            dist = nearest;
            res = 0;
        }

        // 坐末尾
        nearest = this.men.last();
        if (!this.men.contains(this.N - 1) && this.N - 1 - nearest > dist) {
            dist = this.N - 1 - nearest;
            res = this.N - 1;
        }

        this.men.add(res);
        return res;
    }

    public void leave(int p) {
        this.men.remove(p);
    }

    public static void main(String[] args) {
        ExamRoom obj = new ExamRoom(4);
        obj.seat();
        obj.seat();
        obj.seat();
        obj.seat();
        obj.leave(0);
        obj.leave(2);
        System.out.println(obj.seat());
    }
}
