public class OperatorExample2 {
    public static void main(String[] args) {
        int age = 20;
        boolean hasID = true;

        if (age >= 18 && hasID) {
            System.out.println("Allowed to Vote");
        } else {
            System.out.println("Not Allowed");
        }
    }
}
