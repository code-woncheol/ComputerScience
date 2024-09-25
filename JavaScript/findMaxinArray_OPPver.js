// 배열에서 가장 큰 값을 구하는 기능을 객체지향 프로그래밍(OOP) 방식으로 구현
const ret = [1,2,3,4,5,11,12] // 숫자들이 담긴 배열 ret 선언

// List라는 클래스를 정의
class List{
    // 클래스의 생성자 함수, 객체 생성 시 호출됨
    constructor(list) {
        this.list = list; // 클래스 인스턴스에 list 속성을 추가
        this.mx = list.reduce((max, num) => num > max ? num : max, 0); // 클래스 인스턴스에 mx 속성을 추가
    }
    
    
    // getMax 메서드: 저장된 가장 큰 값을 반환하는 함수
    getMax() {
        return this.mx; // this.mx에 저장된 최대값 반환
    }
}

const a = new List(ret) // ret 배열을 입력하여 List 클래스의 인스턴스 a 생성
console.log(a.getMax()) // a.getMax()를 호출하여 배열에서 가장 큰 값 출력
