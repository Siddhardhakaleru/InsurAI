public class ArrayExample2 {
    public static void main(String[] args) {
        int[] arr = {15, 7, 22, 3};
        int max = arr[0];
        for (int i = 1; i < arr.length; i++)
            if (arr[i] > max)
                max = arr[i];
        System.out.println("Largest: " + max);
    }
}
