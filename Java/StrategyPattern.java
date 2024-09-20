// 이 코드는 전략 패턴(Strategy Pattern)을 사용하여 결제 방법을 유연하게 변경하는 방법을 배우기 위한 코드입니다.
// 전략 패턴은 행위 패턴 중 하나로, 실행 시점에서 알고리즘을 선택할 수 있도록 합니다. 여기서는 결제 방식이 전략으로 사용됩니다.

import java.util.ArrayList;
import java.util.List;

// 결제 전략 인터페이스입니다. 결제 방식을 유연하게 변경하기 위해 사용됩니다.
interface PaymentStrategy {
    public void pay(int amount); // 결제 메서드
}

// KAKAOCardStrategy 클래스는 KAKAO 카드를 통한 결제 전략을 구현한 클래스입니다.
class KAKAOCardStrategy implements PaymentStrategy {
    private String name;
    private String cardNumber;
    private String cvv;
    private String dateOfExpiry;

    // 생성자를 통해 카드 정보를 초기화합니다.
    public KAKAOCardStrategy(String nm, String ccNum, String cvv, String expiryDate) {
        this.name = nm;
        this.cardNumber = ccNum;
        this.cvv = cvv;
        this.dateOfExpiry = expiryDate;
    }

    // KAKAO 카드를 통해 결제를 처리하는 메서드입니다.
    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid using KAKAOCard.");
    }
}

// LUNACardStrategy 클래스는 LUNA 카드를 통한 결제 전략을 구현한 클래스입니다.
class LUNACardStrategy implements PaymentStrategy {
    private String emailId;
    private String password;

    // 생성자를 통해 이메일과 비밀번호를 초기화합니다.
    public LUNACardStrategy(String email, String pwd) {
        this.emailId = email;
        this.password = pwd;
    }

    // LUNA 카드를 통해 결제를 처리하는 메서드입니다.
    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid using LUNACard.");
    }
}

// Item 클래스는 쇼핑 카트에 담을 상품을 나타냅니다.
class Item {
    private String name;
    private int price;

    // 생성자를 통해 상품명과 가격을 설정합니다.
    public Item(String name, int cost) {
        this.name = name;
        this.price = cost;
    }

    public String getName() {
        return name; // 상품명 반환
    }

    public int getPrice() {
        return price; // 상품 가격 반환
    }
}

// ShoppingCart 클래스는 쇼핑 카트를 관리하며, 결제 전략을 통해 결제를 처리합니다.
class ShoppingCart {
    List<Item> items;

    public ShoppingCart() {
        this.items = new ArrayList<Item>(); // 아이템 목록을 초기화합니다.
    }

    public void addItem(Item item) {
        this.items.add(item); // 아이템을 카트에 추가합니다.
    }

    public void removeItem(Item item) {
        this.items.remove(item); // 아이템을 카트에서 제거합니다.
    }

    // 카트에 담긴 상품들의 총 가격을 계산하는 메서드입니다.
    public int calculateTotal() {
        int sum = 0;
        for (Item item : items) {
            sum += item.getPrice();
        }
        return sum;
    }

    // 결제 전략을 통해 결제를 처리하는 메서드입니다.
    public void pay(PaymentStrategy paymentMethod) {
        int amount = calculateTotal(); // 총 가격을 계산합니다.
        paymentMethod.pay(amount); // 전달된 결제 전략을 사용하여 결제를 처리합니다.
    }
}

// 전략 패턴을 적용한 메인 클래스입니다.
public class StrategyPattern {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart(); // 쇼핑 카트를 생성합니다.

        Item A = new Item("woncholeA", 100); // 아이템 A를 생성합니다.
        Item B = new Item("woncholeB", 300); // 아이템 B를 생성합니다.

        cart.addItem(A); // 아이템 A를 카트에 추가합니다.
        cart.addItem(B); // 아이템 B를 카트에 추가합니다.

        // LUNACardStrategy를 사용하여 결제
        cart.pay(new LUNACardStrategy("wonchoel@gmail.com", "secret"));

        // KAKAOCardStrategy를 사용하여 결제
        cart.pay(new KAKAOCardStrategy("BONG WONCHEOL", "123456789", "123", "12/01"));
    }
}
