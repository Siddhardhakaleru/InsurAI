class Car {
    String brand;
    int year;

    Car(String b, int y) {
        brand = b;
        year = y;
    }

    void showDetails() {
        System.out.println(brand + " - " + year);
    }
}

public class ClassExample2 {
    public static void main(String[] args) {
        Car c1 = new Car("Honda", 2020);
        c1.showDetails();
    }
}
