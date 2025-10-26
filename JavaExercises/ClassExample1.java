class Student {
    String name;
    int age;
}

public class ClassExample1 {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Siddharth";
        s.age = 22;
        System.out.println("Name: " + s.name);
        System.out.println("Age: " + s.age);
    }
}
