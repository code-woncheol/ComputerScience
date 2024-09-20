# Computer Science
Study for Computer Science

## 싱글톤 패턴

### 장점
- 하나의 인스턴스를 만들어 해당 인스턴스를 여러 모듈에서 공유하며 사용할 수 있기 때문에, 인스턴스를 생성할 때 드는 비용이 줄어드는 장점이 있습니다.

### 단점
- TDD(Test Driven Development)를 할 때 걸림돌이 됩니다.
- TDD에서는 단위 테스트를 주로 하는데, 단위 테스트는 테스트가 서로 독립적이어야 하며, 어떤 순서로든 실행할 수 있어야 합니다.
- 하지만 싱글톤 패턴은 미리 생성된 하나의 인스턴스를 기반으로 구현되는 패턴이므로, 각 테스트마다 **독립적인 인스턴스**를 만들기가 어렵습니다.

## 의존성 주입

- 싱글톤 패턴은 사용하기 쉽고 실용적이지만, 모듈 간 결합을 강하게 만들 수 있다는 단점이 있습니다.
- 이때 **의존성 주입(DI)**을 통해 모듈 간 결합을 느슨하게 만들어 해결할 수 있습니다.

### 의존성이란?
- 의존성은 종속성이라고도 하며, A가 B에 의존성이 있다는 것은 **B의 변경 사항에 대해 A 또한 변해야 함**을 의미합니다.

### 의존성 주입의 장점
- 모듈을 쉽게 교체할 수 있는 구조가 되어 **테스트하기 쉽고 마이그레이션하기 수월**합니다.
- **추상화 레이어**를 통해 구현체를 주입하므로, 애플리케이션 의존성 방향이 일관되며 쉽게 추론할 수 있습니다.
- 모듈 간 관계가 조금 더 명확해집니다.

### 의존성 주입의 단점
- 모듈들이 더욱 분리되므로 **클래스 수가 증가**해 복잡성이 증가될 수 있습니다.
- 약간의 **런타임 패널티**가 발생할 수 있습니다.

### 의존성 주입 원칙
- 의존성 주입은 다음 원칙을 지켜야 합니다:
  - 상위 모듈은 하위 모듈에서 어떠한 것도 가져오지 않아야 합니다.
  - 상위 및 하위 모듈 모두 **추상화**에 의존해야 하며, 이 추상화는 세부 사항에 의존하지 말아야 합니다.

## 팩토리 패턴
- 상위 클래스와 하위 클래스가 분리되어 **느슨한 결합**을 가집니다.
- 상위 클래스는 인스턴스 생성 방식에 대해 알 필요가 없어 **유연성**이 증가합니다.
- 객체 생성 로직이 분리되어 있어, 코드 리팩터링 시 한 곳만 수정하면 되므로 **유지 보수성**이 향상됩니다.

## 전략 패턴
- **정책 패턴**이라고도 하며, 객체의 행위를 바꾸고 싶을 때 직접 수정하지 않고, 전략이라고 부르는 **캡슐화된 알고리즘**을 컨텍스트 안에서 바꿔주어 **상호 교체 가능**한 패턴입니다.
