// 이 코드는 Singleton 패턴을 적용하여 데이터베이스(DB) 연결을 관리하는 방식을 배우기 위한 코드입니다.
// DB 클래스는 하나의 인스턴스만 생성되도록 하여 데이터베이스 연결을 여러 번 생성하지 않도록 합니다.

const URL = "mongodb://localhost:00000/test" // DB 연결을 위한 URL을 정의합니다.
 
// DB 연결을 생성하는 함수입니다. url을 받아 객체로 반환합니다.
const createConnection = url => ({"url" : url})

class DB {
    constructor(url) {
        // DB 인스턴스가 없을 경우 새로 생성합니다.
        if (!DB.instance) {
            DB.instance = createConnection(url)
        }
        // 이미 DB 인스턴스가 있을 경우 해당 인스턴스를 반환합니다.
        return DB.instance
    }

    // connect 메서드는 현재 DB 인스턴스를 반환합니다.
    connect() {
        return this.instance
    }
}

// a와 b는 같은 DB 인스턴스를 참조합니다.
const a = new DB(URL)
const b = new DB(URL)

// 두 인스턴스가 동일한지 확인합니다. true가 출력됩니다.
console.log(a === b) // true

