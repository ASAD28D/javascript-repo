// Q1 : seven primitive data types :

// 1) string :
// any data that in between double quotes "", single quotes '' and `` has string data type.

// 2) number :
// numbers have number data type.

// 3) boolean : 
// in programming anything that is true or false have boolean data type.

// 4) null : 
// null data type is given to a variable that that is suppose to have notthing stored in it.

// 5) undefiend :
// any variable that has nothing stored in it has undefiend datatype. 

// 6) NaN 
// NaN datatype stands for not a number it shows up when we try to do mathematical opraation on non 
// number data.

// Q2 : difference between null, undefined, and NaN

// the diffrence between them is that null is a value that is given to a variable to make it empty 
// intentionally while undefind is the data type of a variable that has nothing stored in it not 
// even null, whereas NaN is the datatype of a non number vaiable that has mathematical opration 
// being done on it .

// Q3 : output of typeof null and why?

// output of type of null is null because null itself is a datatype.

// Q4 : difference between primitive and reference data types in JavaScript

// the data type that is non mutable that can not be modified is called primitive datatype and refrence
// datatype is the one which is modifyable .

// Q5 : What will be the result of: true && false || true? Explain the steps.

// the result of this is true because in and oprator if one of the value is false is returns false now 
// the expression that we have is false or true and in or oprator one true value returns the uotput as true
// hence the anwer is true.

// Q6 :  difference between == and ===.

// == in javascript is use to compare two values for example 5 == '5' usinng double equals to this returns 
// the expression to be true but if we use the === this not only compares the values but it also compares
// the datatype and in the example disscussed erlier using === it will return the output false.

// Q7 : Write a function that returns "Adult" if age >= 18, "Teenager" if 13–17, and "Child" otherwise.

// let age = prompt('enter your age here :', '')
// if (age >= 18) {
//     console.log('adult')
// } else if (age >= 13) {
//     console.log('teenager')
// } else {
//     console.log('child')
// }

// Q8 : How does a switch-case statement work in JavaScript?

// following is the syntax of switch case

let age1 = 10;

switch (age1) {
    case age1 >= 18: console.log('adult')
        break
    case age1 >= 13: console.log('teenager')
        break
    case age1 < 13: console.log('child')
        break
}

// Q9 : differences between push(), pop(), shift(), and unshift()

// Push() : is used to add something at the end of an array
// pop() : is used to remove something from the end of an array
// shift() : is use to add something at the start of the array 
// unshift() : is use to remove something from the start of the array

// Q10 : Write a function to return the sum of all even numbers in an array.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenSum = 0;
for (let i = 0; i <= nums.length; i++) {
    if (i % 2 == 0) {
        evenSum += i
    }
}
console.log(evenSum)

// Q11 : Write a loop to print numbers from 10 to 1.

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// Q12 : difference between for, while, and do...while loops 

// the diffrence bitween for , while , and do...while loop is thier syntx they are intented to give same 
// output but behave diffrently following is the syntx of each of thess :

// for loop :
// for(decalration ; initialization ; increement/decreement){
// code to be executed 
// } 

// while loop : 
// declaration
// while(intialization){
// code to be executed 
// increement/decreement
// }

// do...while loop :
// declaration
// do(){
// code to be executed 
// increement/decreement
// } while(intialization)

// Q13 : difference between function declaration and function expression

// funtion declaration means creating a function and function expression means writing code in that
// function and executing it 

// Q14 : Write a function to reverse a string.

function stringReversed() {
    let sentence = 'this is a string';
    let stringArr = [];
    stringArr = sentence.split(' ');
    console.log(stringArr)
    stringArr.reverse()
    let reversedString = stringArr.toString()
    console.log(reversedString) 
}
stringReversed()


