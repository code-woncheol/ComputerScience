// 이 코드는 Singleton 패턴을 적용하여 하나의 인스턴스만 생성되도록 보장하는 방법을 배우기 위한 코드입니다.
// 이 코드에서는 내부 static 클래스를 이용한 Lazy Initialization을 사용하여 Singleton 인스턴스를 생성합니다.

class Singleton {
    // 내부 static 클래스입니다. 이 클래스는 Singleton 인스턴스를 생성하고 저장합니다.
    private static class singleInstanceHolder {
        // final 키워드를 사용하여 Singleton 인스턴스를 단 한 번만 초기화합니다.
        private static final Singleton INSTANCE = new Singleton();
    }

    // getInstance 메서드를 통해 Singleton 인스턴스를 반환합니다.
    // singleInstanceHolder 클래스가 처음 호출될 때 Singleton 인스턴스가 생성됩니다.
    public static Singleton getInstance() {
        return singleInstanceHolder.INSTANCE;
    }
}

public class HelloWorld {
    public static void main(String[] args) {
        // Singleton 인스턴스를 가져옵니다.
        Singleton a = Singleton.getInstance();
        Singleton b = Singleton.getInstance();

        // 두 인스턴스의 해시코드를 출력하여 동일한 인스턴스인지 확인합니다.
        System.out.println(a.hashCode());
        System.out.println(b.hashCode());

        // 두 인스턴스가 동일한지 비교합니다. true가 출력됩니다.
        if (a == b) {
            System.out.println(true);
        }
    }
}
