/**
 * 引数を足し算して返す
 * @param {number} a 
 * @param {number} b 
 */
function add(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw 'Expect Number';
    }
    return a + b;
}

/**
 * コールバック内包型
 */
function callAsyncFuncInnerCallback() {
    setTimeout(function() {
        console.log('inner callback')
        asyncResult = 'inner call';
    },100);
}

/**
 * コールバック外だし型
 */
function callAsyncFuncOuterCallback() {
    setTimeout(outerCallback,100);
}

/**
 * コールバック関数
 */
function outerCallback(){
    console.log('outer callback');
    asyncResult = 'outer call';
}

function callAsyncPromise() {
    return new Promise(function (resolve) {
        setTimeout(function (){
            asyncResult = 'promise call';
            resolve();
        },100)
    });
}