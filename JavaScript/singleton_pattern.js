// 이 코드는 Singleton 패턴을 배우기 위한 코드입니다. 
// Singleton 패턴은 하나의 클래스에 대해 하나의 인스턴스만 생성되도록 보장하는 디자인 패턴입니다.

class Singleton {
    constructor() {
        // Singleton 클래스의 생성자입니다.
        // 생성된 인스턴스가 없으면(instance가 undefined이면) this를 할당합니다.
        if (!Singleton.instance) {
            Singleton.instance = this
        }
        // 이미 인스턴스가 있으면 해당 인스턴스를 반환합니다.
        return Singleton.instance
    }

    // getInstance 메서드는 현재 인스턴스를 반환합니다.
    getInstance() {
        return this
    }
}

// Singleton 패턴의 특성에 따라 a와 b는 동일한 인스턴스를 참조합니다.
const a = new Singleton()
const b = new Singleton()

// 두 인스턴스가 동일한지 확인합니다. true가 출력됩니다.
console.log(a === b) // true
