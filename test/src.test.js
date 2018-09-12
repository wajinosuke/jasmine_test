describe('add関数のテスト', function () {
    it('整数を渡す 1 + 1 => 2', function () {
        expect(add(1, 1)).toBe(2);
    });

    it('小数点数を渡す 1.1 + 1.1 => 2.2', function () {
        expect(add(1.1, 1.1)).toBe(2.2);
    });

    it('数字以外を渡す \'1\' + \'1\' = 例外（Expect Number）', function () {
        // 例外のテストでは関数を渡す必要がある模様
        expect(function(){return add('1', '1')}).toThrow();
    });
});
