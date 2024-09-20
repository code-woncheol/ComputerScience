// 이 코드는 팩토리 패턴을 사용하여 enum을 통해 다양한 종류의 커피 객체를 생성하는 방법을 배우기 위한 코드입니다.
// 팩토리 패턴은 객체 생성 로직을 클라이언트 코드에서 분리하여, 타입에 따라 적절한 객체를 반환하는 역할을 합니다.

enum CoffeeType {
    LATTE, // 라떼 커피 타입
    ESPRESSO // 에스프레소 커피 타입
}

//추상 메소드(abstract method)란 자식 클래스에서 반드시 오버라이딩해야만 사용할 수 있는 메소드를 의미합니다.
abstract class Coffee {
    //protected 접근자: 같은 패키지에서는 default와 같이 접근 제한이 없지만, 다른 패키지에서는 자식 클래스만 접근을 허용한다.
    protected String name; // 커피 이름을 저장할 변수

    // 커피 이름을 반환하는 메서드
    public String getName() {
        return name;
    }
}

// Latte 클래스는 Coffee의 하위 클래스로, 라떼 커피 객체를 생성합니다.
class Latte extends Coffee {
    public Latte() {
        name = "latte"; // 커피 이름을 "latte"로 설정합니다.
    }
}

// Espresso 클래스는 Coffee의 하위 클래스로, 에스프레소 커피 객체를 생성합니다.
class Espresso extends Coffee {
    public Espresso() {
        name = "Espresso"; // 커피 이름을 "Espresso"로 설정합니다.
    }
}

// CoffeeFactory 클래스는 Coffee 객체를 생성하는 팩토리 역할을 합니다.
class CoffeeFactory {
    // createCoffee 메서드는 주어진 CoffeeType에 따라 Coffee 객체를 생성하고 반환합니다.
    public static Coffee createCoffee(CoffeeType type) {
        switch (type) {
            case LATTE: // LATTE 타입이면 Latte 객체를 반환합니다.
                return new Latte();
            case ESPRESSO: // ESPRESSO 타입이면 Espresso 객체를 반환합니다.
                return new Espresso();
            default:
                // 잘못된 타입이 들어오면 예외를 던집니다.
                throw new IllegalArgumentException("Invalid coffee type: " + type);
        }
    }
}

// Main 클래스에서 커피 객체를 생성하고 사용합니다.
public class Factory_pattern {
    public static void main(String[] args) {
        // CoffeeFactory를 통해 라떼 커피를 생성합니다.
        Coffee coffee = CoffeeFactory.createCoffee(CoffeeType.LATTE);
        // 생성된 커피의 이름을 출력합니다.
        System.out.println(coffee.getName()); // 'latte'가 출력됩니다.
    }
}
