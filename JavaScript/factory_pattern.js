// 이 코드는 팩토리 패턴을 배우기 위한 코드입니다.
// 팩토리 패턴은 객체를 생성할 때 직접 클래스를 사용하지 않고, 생성 메서드를 통해 객체를 반환하는 방식입니다.
// 여기서는 Object 생성자를 사용해 숫자와 문자열 객체를 생성하고, 각 객체의 생성자 이름을 확인합니다.

const num = new Object(42); // 숫자 42를 기반으로 Object 객체를 생성합니다.
const str = new Object('abc'); // 문자열 'abc'를 기반으로 Object 객체를 생성합니다.

num.constructor.name; // num 객체의 생성자 이름을 반환합니다. 'Number'가 출력됩니다.
str.constructor.name; // str 객체의 생성자 이름을 반환합니다. 'String'이 출력됩니다.
