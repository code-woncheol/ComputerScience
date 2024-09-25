class Person {
    public void eat(String a) {
        System.out.println("I eat " + a);
    }

    public void eat(String a, String b){
        System.out.println("I eat " + a + " and " + b);
    }
}

public class Overloading {
    public static void main(String[] args){
        Person a = new Person();
        a.eat("aplle");
        a.eat("apple", "phodo");
    }
}