// EXERCISE 19 : LEVEL 1

// Q : Create a closure which has one inner function

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// EXERCISE : LEVEL 2

// Q : Create a closure which has three inner functions

function outerFunction2() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    function multipluyByTwo() {
        count * 2
        return count
    }

    return plusOne;
    return minusOne;
    return multipluyByTwo;


}
const innerFuncs2 = outerFunction2()

console.log(innerFuncs2.plusOne)
console.log(innerFuncs2.minusOne)
console.log(innerFuncs2.multipluyByTwo)