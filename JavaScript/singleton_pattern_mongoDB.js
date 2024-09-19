// 이 코드는 Mongoose 라이브러리에서 데이터베이스에 연결하는 방법을 배우기 위한 코드입니다.
// Mongoose.prototype.connect 메서드는 MongoDB에 연결하는 역할을 합니다.

Mongoose.prototype.connect = function(uri, options, callback) {
    // this가 Mongoose의 인스턴스인지 확인하고, 그렇지 않으면 전역 mongoose 객체를 사용합니다.
    const _mongoose = this instanceof Mongoose ? this : mongoose;
    const conn = _mongoose.connection; // 현재 Mongoose의 연결 객체를 가져옵니다.

    // _promiseOrCallback 메서드를 호출하여 callback 함수가 제공되었는지 확인하고, 제공되면 promise로 처리합니다.
    return _mongoose._promiseOrCallback(callback, cb => {
        // conn.openUri를 호출하여 주어진 URI와 옵션으로 MongoDB에 연결을 시도합니다.
        conn.openUri(uri, options, err => {
            if (err != null) {
                // 연결에 실패한 경우 에러를 반환합니다.
                return cb(err);
            }
            // 연결이 성공하면 null 에러와 _mongoose 객체를 반환합니다.
            return cb(null, _mongoose);
        });
    });
}
