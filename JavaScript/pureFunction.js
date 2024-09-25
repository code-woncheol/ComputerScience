//출력이 입력에만 의존하는 것을 의미하는 '순수 함수'

const pure = (a, b) => {
    return a + b
}

console.log(pure(1,2));