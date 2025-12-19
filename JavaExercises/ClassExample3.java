class Rectangle {
    int length, breadth;

    void setDimensions(int l, int b) {
        length = l;
        breadth = b;
    }

    int area() {
        return length * breadth;
    }
}

public class ClassExample3 {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle();
        rect.setDimensions(5, 8);
        System.out.println("Area: " + rect.area());
    }
}
