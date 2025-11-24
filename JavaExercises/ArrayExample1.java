public class ArrayExample1 {
    public static void main(String[] args) {
        int[] arr = {5, 8, 3, 9};
        int sum = 0;
        for (int n : arr)
            sum += n;
        System.out.println("Sum: " + sum);
    }
}

