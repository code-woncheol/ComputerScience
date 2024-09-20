// 이 코드는 팩토리 패턴을 사용하여 다양한 종류의 커피 객체를 생성하는 방법을 배우기 위한 코드입니다.
// 팩토리 패턴은 객체 생성 로직을 개별 클래스로 분리하여, 클라이언트가 직접 객체를 생성하지 않고 팩토리를 통해 생성할 수 있도록 합니다.

class CoffeeFactory {
    // createCoffee 메서드는 타입에 맞는 커피 팩토리를 찾아서 커피 객체를 생성합니다.
    static createCoffee(type) {
        const factory = factoryList[type]; // 주어진 타입에 해당하는 팩토리를 factoryList에서 찾습니다.
        return factory.createCoffee(); // 해당 팩토리의 createCoffee 메서드를 호출하여 커피 객체를 생성합니다.
    }
}

// Latte 클래스는 라떼 커피 객체를 정의합니다.
class Latte {
    constructor() {
        this.name = "latte"; // 커피 이름을 "latte"로 설정합니다.
    }
}

// Espresso 클래스는 에스프레소 커피 객체를 정의합니다.
class Espresso {
    constructor() {
        this.name = "Espresso"; // 커피 이름을 "Espresso"로 설정합니다.
    }
}

// LatteFactory 클래스는 라떼 커피를 생성하는 팩토리 클래스입니다.
class LatteFactory extends CoffeeFactory {
    static createCoffee() {
        return new Latte(); // 새로운 라떼 커피 객체를 생성하여 반환합니다.
    }
}

// EspressoFactory 클래스는 에스프레소 커피를 생성하는 팩토리 클래스입니다.
class EspressoFactory extends CoffeeFactory {
    static createCoffee() {
        return new Espresso(); // 새로운 에스프레소 커피 객체를 생성하여 반환합니다.
    }
}

// 커피 팩토리 목록을 정의합니다. 
const factoryList = { LatteFactory, EspressoFactory };

const main = () => {
    // 라떼 커피를 주문합니다.
    const coffee = CoffeeFactory.createCoffee("LatteFactory");
    // 주문한 커피의 이름을 출력합니다.
    console.log(coffee.name); // 'latte'가 출력됩니다.
}

main(); // main 함수를 호출하여 실행합니다.
