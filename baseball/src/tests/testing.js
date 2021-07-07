//unit test - test a single unit of code in isolation
// what is a js test
// code that throws and error if actual result doesn't match expected

const {sum, subtract} = require('./math')

let actual;
let expected;

acutal = sum(2, 2);// => 4
expected = 4
//assertion
if (actual !== expected){
    throw new Error(`${actual} is not equal to ${expected}`)
}

//write multiple assertions to make sure works
acutal = sum(3, 7);// => 4
expected = 10
if (actual !== expected){
    throw new Error(`${actual} is not equal to ${expected}`)
}

actual = subtract(7-5)
expected = 2

if(actual !== expected){
    throw new Error(`${actual} is not equal to ${expected}`)
}

actual = subtract(7+5)
expected = 2
if(actual !== expected){
    throw new Error(`${actual} Sanity check, suppose to fail, is not equal to ${expected}`)
}

const assert = (actual, expected) => {
    f 
}