// 메인 모듈: 이 코드는 MySQL 데이터베이스와의 연결을 설정하고, 연결 풀을 생성하여 데이터베이스에 접근하는 방법을 배우기 위한 코드입니다.

const { connect } = require('http2'); // http2 모듈에서 connect 메서드를 가져옵니다.
const mysql = require('mysql'); // mysql 모듈을 불러옵니다.

// MySQL 연결 풀을 생성합니다. 
// connectionLimit는 최대 10개의 연결을 허용하며, 호스트, 사용자, 비밀번호, 데이터베이스 정보를 입력합니다.
const pool = mysql.createPool({
    connectionLimit: 10, // 최대 연결 수를 10으로 설정
    host: 'example.org', // 데이터베이스 호스트 주소
    user: 'woncheol', // 데이터베이스 사용자 이름
    password: 'secret', // 데이터베이스 사용자 비밀번호
    database: '원철이디비', // 연결할 데이터베이스 이름
});

// 연결 풀을 통해 데이터베이스에 연결을 시도합니다.
pool.connect(); // (오타: pool.connect()가 아니라 다른 메서드로 바꿔야 합니다. MySQL 모듈에서는 pool.getConnection을 사용해야 합니다.)

// 모듈 A: 데이터베이스에 쿼리를 실행하여 결과를 처리하는 부분입니다.
pool.query(query, function (error, results, fields) {
    if (error) throw error; // 에러가 발생하면 에러를 던집니다.
    // 쿼리 결과의 첫 번째 행에서 'solution' 값을 출력합니다.
    console.log('The solution is: ', results[0].solution);
});

// 모듈 B: 동일한 쿼리를 실행하여 결과를 처리하는 또 다른 부분입니다.
pool.query(query, function (error, results, fields) {
    if (error) throw error; // 에러가 발생하면 에러를 던집니다.
    // 쿼리 결과의 첫 번째 행에서 'solution' 값을 출력합니다.
    console.log('The solution is: ', results[0].solution);
});

// GPT Comments
// 주의사항:

// pool.connect() 대신 MySQL 모듈에서 연결을 얻으려면 pool.getConnection()을 사용하는 것이 맞습니다.
// query가 정의되지 않은 코드에서는 실행 시 오류가 발생할 수 있으므로, 실제 쿼리문을 추가해야 합니다.