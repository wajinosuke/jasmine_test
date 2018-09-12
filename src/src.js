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