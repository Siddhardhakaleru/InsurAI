public class DataTypesExample2 {
    public static void main(String[] args) {
        int num = 100;
        double converted = num; 
        double val = 55.78;
        int casted = (int) val; 

        System.out.println("Widened value: " + converted);
        System.out.println("Narrowed value: " + casted);
    }
}
