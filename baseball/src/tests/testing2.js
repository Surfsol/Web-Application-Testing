const assert = require('assert');
const {sum, subtract}=require('./math');

let actual;
let expected;

// actual = sum(3,7);
// expected =10;
// assert.strictEqual(actual, expected);

// actual =subtract(10,7);
// expected = 3;
// assert.strictEqual(actual, expected);
const test = (title, cb)=>{
    try{
        cb();
        console.log(`${title}`);
    }catch(err){
        console.error(`${title}`);
        console.error(err);
    }
}


const expect = (actual)=>{
    return {
        toBe: (expected) => {
            if (actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}


test('Sum Returns The Sum of Two Numbers', ()=>{
    actual = sum(3,7);
    expected =10;
    expect(actual).toBe(expected);
})

test('subtract return the difference of two given numbers', ()=>{
    actual=subtract(10,7);
    expected=3;
    expect(actual).toBe(expected);
})