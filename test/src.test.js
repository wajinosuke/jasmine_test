describe('add関数のテスト', function () {
    it('整数を渡す 1 + 1 => 2', function () {
        expect(add(1, 1)).toBe(2);
    });

    it('小数点数を渡す 1.1 + 1.1 => 2.2', function () {
        expect(add(1.1, 1.1)).toBe(2.2);
    });

    it('数字以外を渡す \'1\' + \'1\' = 例外（Expect Number）', function () {
        // 例外のテストでは関数を渡す必要がある模様
        expect(function () {
            return add('1', '1')
        }).toThrow();
    });
});

describe('非同期処理のテスト', function () {
    beforeAll(function () {
        // タイムアウト時間を30秒に延ばす
        originalTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    });
    describe('非同期処理呼び出し（コールバック内包型）', function () {
        it('非同期処理の呼び出し後、5秒待つ、、、（これぐらいしか方法ないか、、、）', function (done) {
            callAsyncFuncInnerCallback();
            setTimeout(function () {
                expect(asyncResult).toBe('inner call');
                done();
            }, 5000);
        });
    });
    /* NGコード　andの連結は無理そう
    describe('非同期処理呼び出し（コールバック外だし型）', function () {
        it('非同期処理の呼び出し（Spyで無理やりdoneを呼び出したい）',function(done) {
            spyOn(window,'outerCallback')
                .and.callThrough()
                .and.callFake(function() {
                    expect(asyncOuterResult).toBe('outer call');
                    done();
                });
            callAsyncFuncOuterCallback();
        });
    });*/
    describe('非同期処理呼び出し（コールバック外だし型）', function () {
        it('非同期処理の呼び出し後、5秒待つ、、、（これぐらいしか方法ないか、、、）', function (done) {
            callAsyncFuncOuterCallback();
            setTimeout(function () {
                expect(asyncResult).toBe('outer call');
                done();
            }, 5000);
        });
        it('非同期処理呼び出しが実行されたかどうかは確認可能', function (done) {
            spyOn(window, 'outerCallback')
                .and.callFake(function () {
                    done();
                });
            callAsyncFuncOuterCallback();
        })
    });
    describe('非同期処理呼び出し（Promise型）', function () {
        it('returnで待機', function () {
            return callAsyncPromise().then(function () {
                expect(asyncResult).toBe('promise call');
            })
        });
    });

    afterAll(function () {
        // タイムアウト時間をもとに戻す
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeoutInterval;
    });
});